var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
});
//렌더링: ejs 파일
module.exports = router;
