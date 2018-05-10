require('env2')('./config.env');

const { HOST, DB_PORT, DATABASE, PASSWORD, USER } = process.env;

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'khobza',
    database: 'khobza',
    password: 'khobza'
  },
  debug: true
});

module.exports = knex;
