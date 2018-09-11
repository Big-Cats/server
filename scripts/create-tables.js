require('dotenv').config();
const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(256) NOT NULL,
      password VARCHAR(256) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS muscles (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      name VARCHAR(256) NOT NULL,
      description VARCHAR(1024)
    );
    CREATE TABLE IF NOT EXISTS movements (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      name VARCHAR(256) NOT NULL,
      muscle_id INTEGER NOT NULL REFERENCES muscles(id),
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
      reps INTEGER,
      weight_percentage INTEGER
    );
    CREATE TABLE IF NOT EXISTS workouts (
      id SERIAL PRIMARY KEY,
      user_id INTEGER NOT NULL REFERENCES users(id),
      date DATE NOT NULL DEFAULT CURRENT_DATE
    );
    CREATE TABLE IF NOT EXISTS logs (
      id SERIAL PRIMARY KEY,
      workout_id INTEGER NOT NULL REFERENCES workouts(id),
      movement_id INTEGER NOT NULL REFERENCES movements(id),
      attempted INTEGER,
      completed INTEGER,
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