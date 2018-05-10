const { ORGANIZATIONTYPES_TABLE_NAME } = require("../tableNames");

const organizationTypes = () =>
  require("../knex")(ORGANIZATIONTYPES_TABLE_NAME);

const getAllOrganizationTypes = () => organizationTypes().select();

module.exports = {
  getAllOrganizationTypes
};
