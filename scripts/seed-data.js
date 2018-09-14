require('dotenv').config();
const client = require('../db-client');
const users = require('./data/users.json');
const movements = require('./data/movements.json');
const muscles = require('./data/muscles.json');
const programs_to_movements = require('./data/programs_to_movements.json');
const programs = require('./data/programs.json');
const logs = require('./data/logs.json');
const workouts = require('./data/workouts.json');
const maxes = require('./data/maxes.json');


Promise.all(
  users.map(user => {
    return client.query(`
        INSERT INTO users (first, last, email, password)
        VALUES ($1, $2, $3, $4);
    `,
    [user.first, user.last, user.email, user.password]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      muscles.map(muscle => {
        return client.query(`
            INSERT INTO muscles (
              user_id,
              name
            )
            VALUES ($1, $2);
        `,
        [muscle.user_id, muscle.name]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      movements.map(movement => {
        return client.query(`
            INSERT INTO movements (
              user_id,
              name, 
              muscle_id,
              description
            )
            VALUES ($1, $2, $3, $4);
        `,
        [movement.user_id, movement.name, movement.muscle_id, movement.description]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      programs.map(program => {
        return client.query(`
            INSERT INTO programs (
              user_id, 
              name,
              description
            )
            VALUES ($1, $2, $3);
        `,
        [program.user_id, program.name, program.description]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      programs_to_movements.map(item => {
        return client.query(`
            INSERT INTO programs_to_movements (
              program_id, 
              movement_id,
              reps,
              weight_percentage
            )
            VALUES ($1, $2, $3, $4);
        `,
        [item.program_id, item.movement_id, item.reps, item.weight_percentage]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      workouts.map(workout => {
        return client.query(`
            INSERT INTO workouts (
              user_id, 
              date
            )
            VALUES ($1, $2);
        `,
        [workout.user_id, workout.date]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      logs.map(log => {
        return client.query(`
            INSERT INTO logs (
              workout_id, 
              movement_id, 
              attempted,
              completed,
              weight
            )
            VALUES ($1, $2, $3, $4, $5);
        `,
        [log.workout_id, log.movement_id, log.attempted, log.completed, log.weight]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      maxes.map(max => {
        return client.query(`
            INSERT INTO maxes (
              user_id, 
              movement_id, 
              weight
            )
            VALUES ($1, $2, $3);
        `,
        [max.user_id, max.movement_id, max.weight]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());