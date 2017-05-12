var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

var port = 3000;
var app = express();

app.use(bodyParser.json());
app.use(session({
  secret: ';kha;ifhae;ihra;lh',
  resave: true,
  saveUninitialized: false
}));


app.get('/api/data', function(req, res, next){
  
});

app.post('/api/data', function(req, res, next){
  
});



app.listen(port, function() {
  console.log('listening to port ', port);
});