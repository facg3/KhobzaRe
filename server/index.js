const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./database/');
const controllers = require('./controllers');
const app = express();
app.use(express.static(`${__dirname}/public/app`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(controllers);

const port = process.env.PORT || 5000;
database
  .start()
  .then(() => {
    app.listen(port, err => {
      if (err) return Promise.reject(err);
      console.log(`Server started on port ${port}`);
    });
  })
  .catch(err => {
    console.error(err);
  });

module.exports = app;
