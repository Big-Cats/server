require('dotenv').config();

// express for serving, morgan for logging, cors for cors, request for client AJAX lib for calling 3rd party APIs
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const request = require('superagent');

// initialize all three, plus express.json for reading json body
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// server files in public directory
app.use(express.static('public'));

// connect to database
const client = require('./db-client');

// auth routes

app.post('/api/auth/signup', (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    res.status(400).send({
      error: 'email and password are required'
    });
    return;
  }

  client.query(`
    select count(*)
    from users
    where email = $1
  `,
  [email])
    .then(results => {
      if(results.rows[0].count > 0) {
        res.status(400).send({ error: 'email already in use' });
        return;
      }

      client.query(`
        insert into users (email, password)
        values ($1, $2)
        returning id, email
      `,
      [email, password])
        .then(results => {
          res.send(results.rows[0]);
        });
    });

});
app.post('/api/auth/signin', (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  if(!email || !password) {
    res.status(400).send({
      error: 'email and password are required'
    });
    return;
  }

  client.query(`
    select id, email, password
    from users
    where email = $1
  `,
  [email]
  )
    .then(results => {
      const row = results.rows[0];
      if(!row || row.password !== password) {
        res.status(401).send({ error: 'invalid email or password' });
        return;
      }
      res.send({ 
        id: row.id,
        email: row.email
      });
    });
});
app.use((req, res, next) => {
  // is there a Authorization header?
  const id = req.get('Authorization');
  if(!id) {
    // no - send an error
    res.status(403).send({
      error: 'No token found'
    });
    return;
  }

  // 1. set req.userId to the header
  req.userId = id;
  // 2. call next()
  next();
});

// api data routes

app.get('/api/movements', (req, res, next) => {

  client.query(`
    select 
      name, 
      muscle, 
      description
    from movements
    order by name;
  `
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});

app.get('/api/programs', (req, res, next) => {

  client.query(`
    SELECT 
      pm.program_id,
      m.name as "movement",
      pm.sets, 
      pm.reps, 
      pm.weight_percentage
    FROM programs_to_movements pm
    LEFT JOIN movements m
    ON pm.movement_id = m.id;
  
      select
        p.id,
        p.name,
        p.description
      from programs p;
  `
  )
    .then(result => {
      const programMovements = result[0].rows;
      const programs = result[1].rows;
      function pmSelector(val) {
        return programMovements.filter(pm => pm.program_id === val);
      }
      programs.forEach(program => {
        const programId = program.id;
        program.exercises = pmSelector(programId);
      });

      res.send(programs);
    })
    .catch(next);
});


app.get('/api/me/workouts', (req, res, next) => {

  const workoutsPromise = client.query(`
    SELECT 
      id, 
      date
    FROM workouts w
    WHERE w.user_id = $1;
  `,
  [req.userId]);

  const exercisesPromise = client.query(`
    SELECT 
      w.id,
      m.name as "movement",
      e.weight,
      e.reps,
      e.sets
    FROM workouts w
    INNER JOIN exercises e ON w.id = e.workout_id
    LEFT JOIN movements m ON e.movement_id = m.id
    WHERE w.user_id = $1;
  `,
  [req.userId]);

  Promise.all([workoutsPromise, exercisesPromise])
    .then(promiseValues => {
      const workouts = promiseValues[0].rows;
      const exercises = promiseValues[1].rows;

      if(workouts.length === 0 || exercises.length === 0) {
        res.sendStatus(404);
        return;
      }
      function exerciseSelector(val) {
        return exercises.filter(e => e.id === val);
      }
      workouts.forEach(workout => {
        workout.exercises = exerciseSelector(workout.id);
      });

      res.send(workouts);
    })
    .catch(next);
});


app.get('/api/me/sets', (req, res, next) => {

  client.query(`
    select 
      id, 
      user_id as "userId", 
      description, 
      completed
    from goals
    where user_id = $1
    order by description;
  `,
  [req.userId]
  )
    .then(result => {
      res.send(result.rows);
    })
    .catch(next);
});



app.post('/api/me/goals', (req, res, next) => {
  const body = req.body;
  if(body.description === 'error') return next('bad name');

  client.query(`
    insert into goals (user_id, description, completed)
    values ($1, $2, $3)
    returning *, user_id as "userId";
  `,
  [req.userId, body.description, body.completed]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  })
    .catch(next);
});

app.put('/api/me/goals', (req, res) => {
  console.log('posting');
  const body = req.body;
  client.query(`
    UPDATE goals
    SET description = $2, 
      completed = $3, 
      user_id = $4
    WHERE id = $1
    RETURNING *, user_id as "userId";
  `,
  [body.id, body.description, body.completed, req.userId]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

// users
// app.get('/api/users', (req, res, next) => {

//   client.query(`
//     SELECT 
//       u.id, u.email,
//       count(g.id) as "goalCount"
//     FROM users u 
//     JOIN goals g
//     on u.id = g.user_id
//     group by u.id
//     order by u.email;
//   `)
//     .then(result => {
//       res.send(result.rows);
//     })
//     // we don't need the wrapper function:
//     // .catch(err => {
//     //   next(err);
//     // });
//     // we can just pass next _as_ the error callback function:
//     .catch(next);
// });

app.get('/api/users', (req, res) => {
  client.query(`
  SELECT
  g.id,
  g.user_id as "userId",
  g.description,
  g.completed
  FROM goals g;
  
    SELECT
    u.id, 
    u.email
    FROM users u;
  `)
    .then(result => {
      const goals = result[0].rows;
      const users = result[1].rows;
      users.forEach(user => {
        user.goals = goals.filter(goal => {
          return goal.userId === user.id;
        });
      });
      res.send(users);
    })
    .catch(err => console.log(err));
});




// start "listening" (run) the app (server)
const PORT = process.env.PORT;
app.listen(PORT, () => console.log('app running on', PORT));