const initUsers = require('./users');
const initProduct = require('./products');

module.exports = {
  initDb: () =>
    initUsers()
      .then(() => initProduct())
      .then(() => {})
      .catch(err => console.log(err))
};
