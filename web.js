var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var indexFile = fs.readFileSync('index.html');
var aboutFile = fs.readFileSync('about.html');

app.get('/', function(request, response) {
  response.send(indexFile.toString());
});

app.get('/index.html', function(request, response) {
  response.send(indexFile.toString());
});

app.get('/about.html', function(request, response) {
  response.send(aboutFile.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
