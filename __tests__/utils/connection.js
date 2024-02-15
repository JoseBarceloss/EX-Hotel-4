const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  multipleStatements: true,
  timezone: 'Z',
});

module.exports = connection;