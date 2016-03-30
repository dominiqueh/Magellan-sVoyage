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
app.get('/CanaryIslands', function(req, res){
  res.sendFile('CanaryIslands.html', {root: __dirname + '/public/html/'})
});

// Cape Verde
app.get('/CapeVerde', function(req, res){
  res.sendFile('CapeVerde.html', {root: __dirname + '/public/html/'})
});

// Strait of Magellan
app.get('/StraitofMagellan', function(req, res){
  res.sendFile('StraitofMagellan.html', {root: __dirname + '/public/html/'})
});

// Guam
app.get('/guam', function(req, res){
  res.sendFile('guam.html', {root: __dirname + '/public/html/'})
});

// Philippines
app.get('/phillippines', function(req, res){
  res.sendFile('phillippines.html', {root: __dirname + '/public/html/'})
});

// Bonus 2.
app.get('/next', function(req, res){
  console.log(req.query)
//First Work
  // var destinyArray = ["Seville", "Canary Islands", "Cape Verde", "Strait of Magellan", "Guam", "Philippines"]
  // var location = req.params.current //Input from query string I'm assuming
  // var nextlocation = ""
  // var nextLocationIndex = 0
  // if (location == "Philippines") {
  //   nextlocation = "none"
  // }
  // else {
  //   for (var i = 0; i < destinyArray.length; i++) {
  //     if (location == destinyArray[i]) {
  //       nextLocationIndex = i + 1
  //       nextLocation = destinyArray[nextLocationIndex]
  //     }
  //   }
  // }
  // var nextObject = {}
  // nextObject.location = location
  // nextObject.nextLocation = nextLocation

//Second Work

  var locationObject = {
    Seville: "Canary Islands",
    CanaryIslands: "Cape Verde",
    CapeVerde:"Strait of Magellan",
    StraitofMagellan:"Guam",
    Guam:"Philippines",
    Philippines:"N/A"
  }
  res.send(locationObject[req.query.location])
})

// Bonus 1. Routing for any destination that's not included in voyage.
app.get('/:destiny',function(req,res){
  console.log('Params:' , req.params)
  res.send("<marquee> Magellan didn\'t go to, " + req.params.destiny + "!</marquee>")
})



// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
// Creating Server and Listening for Connections
// =+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+=
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
})
