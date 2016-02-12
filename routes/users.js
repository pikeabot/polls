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

var DemVote = mongoose.model('DemVote', demSchema);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.post('/vote', function(req, res) {
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


module.exports = router;
