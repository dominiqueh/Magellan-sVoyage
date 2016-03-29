// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Requires
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=

var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Create Express App Object
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=

var app = express();

// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Application Configuration
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Routes to Magellan's Destinations
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=\\

// Home page at Seville
app.get('/', function(req, res){
  res.sendFile('Seville.html', {root: __dirname + '/public/html/'})
});

// Canary Islands
app.get('/tweety', function(req, res){
  res.sendFile('CanaryIslands.html', {root: __dirname + '/public/html/'})
});

// Cape Verde
app.get('/verde', function(req, res){
  res.sendFile('CapeVerde.html', {root: __dirname + '/public/html/'})
});

// Strait of Magellan
app.get('/nohomo', function(req, res){
  res.sendFile('StraitofMagellan.html', {root: __dirname + '/public/html/'})
});

// Guam
app.get('/guacamole', function(req, res){
  res.sendFile('guam.html', {root: __dirname + '/public/html/'})
});

// Philippines
app.get('/pippa', function(req, res){
  res.sendFile('phillippines.html', {root: __dirname + '/public/html/'})
});

// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})
