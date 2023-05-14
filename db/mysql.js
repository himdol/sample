require('dotenv').config();

var mysql = require('mysql');

/* mysql setting */
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_DB_USER,
  password: process.env.DATABASE_DB_PASSWORD,
  database: process.env.DATABASE_DATABASE
});

connection.connect();

/* GET home page. */
connection.query('SELECT * from Users', (error, rows) => {
  if (error) {
    console.log(error);
  } else {
    console.log(rows);
  }
});

connection.end();