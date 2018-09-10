require('dotenv').config();
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(256) NOT NULL,
      password VARCHAR(256) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS movements (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      name VARCHAR(256) NOT NULL,
      muscle VARCHAR(256),
      description VARCHAR(1024)
    );
    CREATE TABLE IF NOT EXISTS programs (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      name VARCHAR(256) NOT NULL,
      description VARCHAR(1024)
    );
    CREATE TABLE IF NOT EXISTS programs_to_movements (
      id SERIAL PRIMARY KEY,
      program_id INTEGER NOT NULL REFERENCES programs(id),
      movement_id INTEGER NOT NULL REFERENCES movements(id),
      sets INTEGER,
      reps INTEGER,
      weight_percentage INTEGER
    );
    CREATE TABLE IF NOT EXISTS workouts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      date DATE NOT NULL DEFAULT CURRENT_DATE
    );
    CREATE TABLE IF NOT EXISTS exercises (
      id SERIAL PRIMARY KEY,
      movement_id INTEGER NOT NULL REFERENCES movements(id),
      workout_id INTEGER NOT NULL REFERENCES workouts(id),
      sets INTEGER,
      reps INTEGER,
      weight INTEGER
    );
    CREATE TABLE IF NOT EXISTS sets (
      id SERIAL PRIMARY KEY,
      exercise_id INTEGER NOT NULL REFERENCES exercises(id),
      reps INTEGER,
      weight INTEGER
    );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });