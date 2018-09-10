require('dotenv').config();
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(256) NOT NULL,
      password VARCHAR(256) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS movement (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) NOT NULL,
      muscle VARCHAR(256),
      description VARCHAR(1024)
    );
    CREATE TABLE IF NOT EXISTS program (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      name VARCHAR(256) NOT NULL,
      description VARCHAR(1024)
    );
    CREATE TABLE IF NOT EXISTS program_to_movement (
      id SERIAL PRIMARY KEY,
      program_id INTEGER NOT NULL REFERENCES program(id),
      movement_id INTEGER NOT NULL REFERENCES movement(id),
      sets INTEGER,
      reps INTEGER,
      weight_percentage INTEGER
    );
    CREATE TABLE IF NOT EXISTS workout (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      date DATE NOT NULL DEFAULT CURRENT_DATE
    );
    CREATE TABLE IF NOT EXISTS exercise (
      id SERIAL PRIMARY KEY,
      movement_id INTEGER NOT NULL REFERENCES movement(id),
      workout_id INTEGER NOT NULL REFERENCES workout(id),
      sets INTEGER,
      reps INTEGER,
      weight INTEGER
    );
    CREATE TABLE IF NOT EXISTS set (
      id SERIAL PRIMARY KEY,
      exercise_id INTEGER NOT NULL REFERENCES exercise(id),
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