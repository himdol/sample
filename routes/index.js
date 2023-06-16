var express = require('express');
var router = express.Router();
// let calc = require('/javascripts/calc');
var mysql = require('mysql');
require('dotenv').config();
const app = express();

const nodemailer = require('nodemailer');

//todo 암호화 해보기 passmodule
//todo 엑셀 업로드
//todo 이메일 받아서 배치
//todo 일주일에 대해서 메뉴 보기 (admin)


const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_DB_USER,
  password: process.env.DATABASE_DB_PASSWORD,
  database: process.env.DATABASE_DATABASE
});


// console.log(calc.add(1, 2));

// mail service
// const main = async () => {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: "oohwhoa8832@gmail.com",
//       pass: "jdeqnbffaangcvsp",
//     },
//   });
//
//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     // from: `"WDMA Team" <${process.env.NODEMAILER_USER}>`,
//     from: `oowhoa8832@gmail.com`,
//     to: `ihimchan746@amorepacific.com`,
//     subject: 'TEST Email',
//     text: "TESTSETSTESTTESTSET",
//     html: ``,
//   });
//
//   console.log('Message sent: %s', info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//
//   //#4. 전송 후 결과 단순 출력
//   for(let key in info){
//     console.log('키 : '+key + ', 값 : ' + info[key])
//   }
//
//   // res.status(200).json({
//   //   status: 'Success',
//   //   code: 200,
//   //   message: 'Sent Auth Email',
//   // });
//
// };

// main().catch(console.error);

/* GET home page. */
router.get('/', function(req, res, next) {

  let queryShop = "SELECT * FROM SHOP";

  connection.query(queryShop, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log("rows");
      console.log(rows);
      // 결과를 이름 지정된 객체로 변환
      const shopList = rows.map(r => {
        return {
          SHOP_ID: r.SHOP_ID,
          ADMIN_ID: r.ADMIN_ID,
          SHOP_NAME_KR: r.SHOP_NAME_KR,
          SHOP_NAME_EN: r.SHOP_NAME_EN,
          SHOP_ADDRESS: r.SHOP_ADDRESS,
          SHOP_NUMBER: r.SHOP_NUMBER,
          MANAGE_TF: r.MANAGE_TF,
          CREATE_BY: r.CREATE_BY,
          CREATE_DATE: r.CREATE_DATE,
          UPDATE_BY: r.UPDATE_BY,
          UPDATE_DATE: r.UPDATE_DATE
        };
      });

      res.render('index', { title: '구내식당', 'shopList': shopList});
    }
  });

});
// app.use('/static', express.static('public'));

//ajax
router.post('/postTest', function (req, res) {
  console.log(req.body.name);

  let stringQuery = "insert into Users values ('a', '1234')";

  connection.query(stringQuery, (error, rows) => {
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(rows);
      // 결과를 이름 지정된 객체로 변환
      // const usersResult = rows.map(r => {
      //   return {
      //     id: r.id,
      //     password: r.password,
      //   };
      // });

      // res.render('index', { title: '구내식당'});
    }
  });

});

router.get('/aboutMe', function (req, res) {
  res.render('aboutMe', {title: '만든이'});
});

module.exports = router;
