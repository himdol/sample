var express = require('express');
var router = express.Router();
var mysql = require('mysql');
require('dotenv').config();
const nodemailer = require('nodemailer');

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_DB_USER,
  password: process.env.DATABASE_DB_PASSWORD,
  database: process.env.DATABASE_DATABASE
});


const main = async () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: "oohwhoa8832@gmail.com",
      pass: "jdeqnbffaangcvsp",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    // from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
    from: `oowhoa8832@gmail.com`,
    to: `ihimchan746@amorepacific.com`,
    subject: 'TEST Email',
    text: "TESTSETSTESTTESTSET",
    html: ``,
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //#4. 전송 후 결과 단순 출력
  for(let key in info){
    console.log('키 : '+key + ', 값 : ' + info[key])
  }

  // res.status(200).json({
  //   status: 'Success',
  //   code: 200,
  //   message: 'Sent Auth Email',
  // });

};

main().catch(console.error);

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
