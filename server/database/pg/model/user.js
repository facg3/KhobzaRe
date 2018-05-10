const { USERS_TABLE_NAME } = require('../tableNames');

const users = () => require('../knex')(USERS_TABLE_NAME);

const insertUser = (name, phoneNumber, password, role = 'user') =>
  users()
    .insert({ name, phoneNumber, password, role })
    .returning('*');

module.exports = {
  insertUser
};
