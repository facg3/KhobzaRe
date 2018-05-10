const {
  ORGANIZATIONS_TABLE_NAME,
  ORGANIZATIONTYPES_TABLE_NAME
} = require("../tableNames");

const { organizationTypes, organizations } = require("./dummyData");

const knex = require("../knex");

knex
  .batchInsert(ORGANIZATIONTYPES_TABLE_NAME, organizationTypes)
  .then(() => knex.batchInsert(ORGANIZATIONS_TABLE_NAME, organizations))
  .then(() => knex.destroy())
  .catch(err => {
    console.error(err);
  });
