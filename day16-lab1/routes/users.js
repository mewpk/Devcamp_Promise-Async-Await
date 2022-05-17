var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise')

/* GET users listing. */
router.get('/', function (req, res, next) {
  mysql
    .createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      password: '1234', // <== ระบุให้ถูกต้อง
      database: 'codecamp', // <== ระบุ database ให้ถูกต้อง
      port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })
    .then((connection) => {

      const userPromise = connection.query('SELECT * from user');
      const classroomPromise = connection.query('SELECT * from classroom');
 
      Promise.all([userPromise, classroomPromise])
        .then((rows) => {
          res.json({
            users: rows[0][0],
            classsrooms: rows[1][0],
          });
        })
        .catch((err) => {
          res.json({ error: err });
        });
 
    });
 });
 
 
module.exports = router;
