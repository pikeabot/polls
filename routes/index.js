var express = require('express');
var router = express.Router();
var pg = require('pg');
var React = require('react')
//var connectionString = require(path.join(__dirname, '../', '../', 'config'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* register page. */
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
