var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.logined){
    res.render('index', { title: 'Express', login_id:req.session.login_id});
  }else{
    res.render('index', { title: 'Express', login_id:''});
  }
});

module.exports = router;
