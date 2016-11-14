var express = require('express')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ctrl = require('./controllers/index');
var users = require('./controllers/users');
var index = express();
var port 	= 3000;

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine');

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(require('node-sass-middleware')({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }));
//
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(process.env.PORT || port);
// console.log("Server has started");
module.exports = ctrl;
