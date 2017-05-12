var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var data = require('./data.js')

var app = express();

app.use(bodyParser.json());

app.get('/api/getData', function(req, res, next){
	let q = req.query;

	if (req.query){
		var filteredData = data.filter(function(obj){
			for (var key in q){
				if (obj[key] !== q[key]){
					return false;
				}
			}
			return true;
		})
		return res.status(200).send(filteredData);
	}else{
		return res.status(200).send(data);
	}
	
});
app.get('/api/getItem/:index', function(req, res, next){
	let index = req.params.index;
	return res.status(200).json(data[index]);
});

app.put('/api/updateItem/:index', function(req, res, next){
	let index = req.params.index;

});

app.post('/api/getData', function(req, res, next){
	let newPerson = req.body.newPerson;
	data.push(newPerson);
	return res.status(200).send('ok');
});

app.delete('/api/delete/:index', function(req, res, next){
	let index = req.params.index;
	data.splice(index, 1);
	return res.status(200).send('ok');
});




app.listen(port, function() {
	console.log('Listening on port',port);
})