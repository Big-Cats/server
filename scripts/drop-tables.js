require('dotenv').config();
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS maxes;
  DROP TABLE IF EXISTS logs;
  DROP TABLE IF EXISTS workouts;
  DROP TABLE IF EXISTS programs_to_movements;
  DROP TABLE IF EXISTS programs;
  DROP TABLE IF EXISTS movements;
  DROP TABLE IF EXISTS muscles;
  DROP TABLE IF EXISTS users;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });