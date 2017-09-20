var express = require('express');
var router = express.Router();

router.post('/test', function(req, res, next) {
  theMsg = req.body.msg;
  isOk = !!theMsg && theMsg.length > 3;

  var response = {
    msg: theMsg,
    isOk: isOk
  }
  
  res.json(response);
});

module.exports = router;
