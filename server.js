const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	console.log(req.url);
	if(req.url=='/'){
		res.sendFile(path.join(__dirname, 'index.html'));
	} 
});

var server = app.listen(process.env.PORT || 4000, function() {
	console.log('Your node js server is running');
});