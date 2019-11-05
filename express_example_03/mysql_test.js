var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'skku',
    password:'skku1234',
    database:'skku_db'
});//workbench 실행

connection.connect();
connection.query('select * from login',function(err,rows,fields){
    if(!err){
        console.log(rows);
    } else {
        console.log(err);
    }
});
connection.end();