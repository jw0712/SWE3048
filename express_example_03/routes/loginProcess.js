var express = require('express');
var router = express.Router();

/* POST login process */
router.post('/', function(req, res, next) {
    //login.ejs에서 post로 넘기기 때문에!
    //<form id="loginForm" action="/loginProcess" method="post">
  res.send('login id= '+req.body.id + ', password= '+req.body.password);
});

module.exports = router;
