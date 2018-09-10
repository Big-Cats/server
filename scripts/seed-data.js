require('dotenv').config();
const client = require('../db-client');
const users = require('./data/users.json');
const exercises = require('./data/exercises.json');
const movements = require('./data/movements.json');
const programs_to_movements = require('./data/programs_to_movements.json');
const programs = require('./data/programs.json');
const sets = require('./data/sets.json');
const workouts = require('./data/workouts.json');


Promise.all(
  users.map(user => {
    return client.query(`
        INSERT INTO users (email, password)
        VALUES ($1, $2);
    `,
    [user.email, user.password]
    ).then(result => result.rows[0]);
  })
)
  .then(() => {
    return Promise.all(
      movements.map(movement => {
        return client.query(`
            INSERT INTO movements (
              user_id,
              name, 
              muscle,
              description
            )
            VALUES ($1, $2, $3, $4);
        `,
        [movement.user_id, movement.name, movement.muscle, movement.description]
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
              sets,
              reps,
              weight_percentage
            )
            VALUES ($1, $2, $3, $4, $5);
        `,
        [item.program_id, item.movement_id, item.sets, item.reps, item.weight_percentage]
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
      exercises.map(exercise => {
        return client.query(`
            INSERT INTO exercises (
              movement_id, 
              workout_id,
              sets,
              reps,
              weight
            )
            VALUES ($1, $2, $3, $4, $5);
        `,
        [exercise.movement_id, exercise.workout_id, exercise.sets, exercise.reps, exercise.weight]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(() => {
    return Promise.all(
      sets.map(set => {
        return client.query(`
            INSERT INTO sets (
              exercise_id, 
              reps,
              weight
            )
            VALUES ($1, $2, $3);
        `,
        [set.exercise_id, set.reps, set.weight]
        ).then(result => result.rows[0]);
      })
    );
  })
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());