const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/', router)

app.use((err, req, res, next) => {
  res.json(err); 
});

module.exports = app;
