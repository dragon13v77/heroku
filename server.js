const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');

app.get('/app.js', function(req, res) {
	console.log(req.url);
	if (req.url == '/app.js'){
        fs.readFile('./app.js', function (err, file) {
             if (err) {
                  res.send(500,{error: err});
             }
             res.writeHeader(200, {"Content-Type": "text/javascript"});
             res.write(file);
             res.end();
        });
    }
});

app.get('/index.css', function(req, res) {
	console.log(req.url);
	if (req.url == '/index.css'){
        fs.readFile('./index.css', function (err, file) {
             if (err) {
                  res.send(500,{error: err});
             }
             res.writeHeader(200, {"Content-Type": "text/css"});
             res.write(file);
             res.end();
        });
    }
});

app.get('/', function(req, res) {
	console.log(req.url);
	if(req.url=='/'){
		res.sendFile(path.join(__dirname, 'index.html'));
	} 
});



var server = app.listen(process.env.PORT || 4000, function() {
	console.log('Your node js server is running');
});