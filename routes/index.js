var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: '5117 in class: 9/20/2017',
    msg: 'hi',
    msg2: '<strong>hi</strong>',
    aList: [
      {x: 10, y: 20},
      {x: 20, y: 30},
    ],
    aBoolean: 0,
    // layout: 'secondlayout',
  };

  res.render('index', data);
});

module.exports = router;
