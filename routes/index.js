var express = require('express');
var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '구내식당' });
});

router.get('/aboutMe', function (req, res) {
  res.render('aboutMe', {title: '만든이'});
});

module.exports = router;
