const { pg: { user } } = require('../database');
const register = (req, res) => {
  const { name, phoneNumber, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    res.json({ err: 'password dosent match' });
  } else {
    user
      .insertUser(name, phoneNumber, password)
      .then(response => {
        res.json({ success: response });
      })
      .catch(err => {
        console.error(err);
      });
  }
};

module.exports = { register };
