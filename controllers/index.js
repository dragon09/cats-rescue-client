var express = require('express');
var ctrl = express.Router();

ctrl.get('/', function(req, res, next) {
  res.render('index', { title: 'Cats rescue Client' });
});

module.exports = ctrl;
