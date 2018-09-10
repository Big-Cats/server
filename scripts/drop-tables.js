require('dotenv').config();
const client = require('../db-client');

client.query(`
  DROP TABLE IF EXISTS set;
  DROP TABLE IF EXISTS exercise;
  DROP TABLE IF EXISTS workout;
  DROP TABLE IF EXISTS program_to_movement;
  DROP TABLE IF EXISTS program;
  DROP TABLE IF EXISTS movement;
  DROP TABLE IF EXISTS users;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });