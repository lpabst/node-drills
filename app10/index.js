var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var port = 3000;
var config = require('./config');
var userCtrl = require('./controllers/userCtrl');

var app = express();

//Serving up app from the back end server
app.use(express.static(__dirname + '/assets'));


//Middleware
app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true
}));


//Endpoints
app.get('/api/users', userCtrl.getUsers);
app.get('/api/users/:index', userCtrl.getUserByIndex);












app.listen(port, function() {
	console.log('Boo ya, listening on port',port);
})