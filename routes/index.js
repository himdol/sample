var express = require('express');
var router = express.Router();
var mysql = require('mysql');
let path;
var dotenv = require('dotenv');
dotenv.config();

console.log(process.env.TEST);

switch (process.env.NODE_ENV) {
  case "prd": path = `${__dirname}/.env.prd`;
    break;
  case "dev": path = `${__dirname}/.env.dev`;
    break;
  default: path = `${__dirname}/.env.local`;
}

dotenv.config({path: path});

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_DB_USER,
  password: process.env.DATABASE_DB_PASSWORD,
  database: process.env.DATABASE_DATABASE
});

/* GET home page. */
router.get('/', function(req, res, next) {
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

  res.render('index', { title: '구내식당' });
});

router.get('/aboutMe', function (req, res) {
  res.render('aboutMe', {title: '만든이'});
});

module.exports = router;
