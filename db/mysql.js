import 'dotenv';

var mysql = require('mysql');

/* mysql setting */
const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
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