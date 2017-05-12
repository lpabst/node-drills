const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');

var app = express();
app.use(bodyParser.json());

app.get('/api/getData', function(req, res, next){
    return res.status(200).json(data.data);
});

app.post('/api/addItem', function(req, res, next){
    var newItem = req.body.newItem;
    data.data.push(newItem);
    return res.status(200).send(data.data);
});




app.listen(3000, console.log('hi'));