var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://172.17.0.1:27017/polls');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var demSchema = mongoose.Schema({
    Bernie: Number,
    Hillary: Number

});

var repSchema = mongoose.Schema({
    Trump: Number,
    Cruz: Number

});

var DemVote = mongoose.model('DemVote', demSchema);
var RepVote = mongoose.model('RepVote', repSchema);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.post('/vote/Dem', function(req, res) {
	DemVote.findOne({ }, function (err, demvotes){
		if (req.body.candidate == 'Bernie') {
  			demvotes.Bernie++;
  		}
  		else {
  			demvotes.Hillary++;
  		}
  		demvotes.save();
	});
});

router.post('/vote/Rep', function(req, res) {
  RepVote.findOne({ }, function (err, repvotes){
    if (req.body.candidate == 'Trump') {
        repvotes.Trump++;
      }
      else {
        repvotes.Cruz++;
      }
      repvotes.save();
  });
});

module.exports = router;
