const express = require('express');
const bodyParser = require('body-parser');
const monstersRouter = require('./routes/monsters');
const habitatsRouter = require('./routes/habitats');

const app = express();

app.use(bodyParser.json());
app.use('/monsters', monstersRouter);
app.use('/habitats', habitatsRouter);

app.use((err, req, res, next) => {
  res.json(err); 
});

module.exports = app;
