var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: '5117 in class: 9/20/2017',
  };

  res.render('index', data);
});

module.exports = router;
