var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_DB_USER,
  password: process.env.DATABASE_DB_PASSWORD,
  database: process.env.DATABASE_DATABASE
});

/* GET home page. */
router.get('/', function(req, res, next) {
  /* GET home page. */
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(rows);
      // 결과를 이름 지정된 객체로 변환
      const usersResult = rows.map(r => {
        return {
          id: r.id,
          password: r.password,
        };
      });

      res.render('index', { title: '구내식당', result: JSON.stringify(usersResult)});
    }
  });

});

router.get('/aboutMe', function (req, res) {
  res.render('aboutMe', {title: '만든이'});
});

module.exports = router;
