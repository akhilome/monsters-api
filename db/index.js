const { Pool } = require('pg');
const { user, host, database, password, port } = require('../secrets/dbConfig');

const pool = new Pool({ user, host, database, password, port });

pool.query('SELECT * FROM monsters', (err, res) => {
  if (err) return console.error(err);

  console.log(res);
});
