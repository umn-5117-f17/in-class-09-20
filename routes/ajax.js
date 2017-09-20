var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {
  var theMsg = req.body.msg;
  var isOk = !!theMsg && theMsg.length > 3;

  var response = {
    msg: theMsg,
    isOk: isOk
  }

  res.json(response);
});

module.exports = router;
