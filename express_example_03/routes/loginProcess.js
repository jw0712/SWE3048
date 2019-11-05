var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'skku',
    password: 'skku1234',
    database: 'skku_db'
});//workbench 실행
var router = express.Router();

/* POST login process */
router.post('/', function (req, res, next) {
    //login.ejs에서 post로 넘기기 때문에!
    //<form id="loginForm" action="/loginProcess" method="post">
    //res.send('login id= '+req.body.id + ', password= '+req.body.password);
    
    connection.connect();
    connection.query('select * from login where user_id=\'' + req.body.login_id+'\'', function (err, rows, fields) {
    
        if (!err) {
            if(rows.length > 0){ //login id 존재
                req.session.logined = true;
                req.session.login_id = req.body.login_id;
            }
            console.log(rows);
        } else {
            console.log(err);
        }
        res.redirect('/');
    });
    /*
    if (req.body.login_id == '123456') {
        req.session.logined = true;
        req.session.login_id = req.body.login_id; //서버에 저장되는 값 = 사용자로부터 넘어오는 값
    } else {
        req.session.destroy();
    }*/
    console.log('end get....');
    connection.end();
    //res.redirect('/');  //root로 redirect. app.js의 root찾아서 indexRouter--> index.js 실행
});

module.exports = router;
