const knex = require('../knex');
const { PRODUCTS_TABLE_NAME } = require('../tableNames');

module.exports = () =>
  knex.schema.hasTable(PRODUCTS_TABLE_NAME).then(exists => {
    if (exists) return;

    return knex.schema.createTable(PRODUCTS_TABLE_NAME, table => {
      table.increments();
      table.string('name');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at');
    });
  });
