const express = require('express');
const monstersRouter = require('./routes/monsters');

const app = express();

app.use('/monsters', monstersRouter);

app.use((err, req, res, next) => {
  res.json(err); 
});

module.exports = app;
