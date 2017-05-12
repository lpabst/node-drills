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
  return res.status(200).send(req.session.data);
});

app.post('/api/data', function(req, res, next){
  req.session.data = req.body;
  return res.status(200).send('post worked')
});



app.listen(port, function() {
  console.log('listening to port ', port);
});