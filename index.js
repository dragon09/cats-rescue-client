var express = require('express')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ctrl = require('./controllers/index');
var users = require('./controllers/users');
var index = express();


module.exports = ctrl;
