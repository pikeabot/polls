var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.post('/vote', function(req, res) {
  console.log(req.body.candidate);
  //res.send(req.body.optradio);
  //res.send(200);
});


module.exports = router;
