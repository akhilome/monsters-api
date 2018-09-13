const { Pool } = require('pg');
const { user, host, database, password, port } = require('../secrets/dbConfig');

const pool = new Pool({ user, host, database, password, port });

module.exports = pool;
