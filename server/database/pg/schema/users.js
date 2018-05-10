const knex = require('../knex');
const { USERS_TABLE_NAME } = require('../tableNames');

module.exports = () =>
  knex.schema.hasTable(USERS_TABLE_NAME).then(exists => {
    if (exists) return;

    return knex.schema.createTable(USERS_TABLE_NAME, table => {
      table.increments();
      table.string('name');
      table.integer('phoneNumber');
      table.string('password');
      table.string('role');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at');
    });
  });
