var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const schedule = require('node-schedule');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000, function(){
  console.log('Express start on port 3000!');
  schedule.scheduleJob('* * * * * *', function(){
    console.log('The answer to life, the universe, and everything!');
  });
});

// nodeschedule rule 지정.
// '초 분 시 일 월 요일(0 과 7 은 일요일)'
// ex) '0 0 15 1 * *' <- 매월 1일 오후 3시 정각
// const rule = '0 0 9 * * 1'; // 매주 월요일 오전 9시 정각​

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
