// SETUP:
// Install Express.js
// Download some PNG image and add as images/yourimage.png
// Example from Katie Seaborn

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});


var coolHandler = function(req, res) {
  res.sendFile(__dirname + '/images/yourimage.png');
};
app.get(/.*pool$/, coolHandler);


// You can chain handlers!
// Use the third parameter 'next' and invoke this var as a function.
// Note that order matters.

var first = function(req, res, next) {
  res.write('What is it?'); // This will break ...
  next();
};
var secret = function(req, res) {
  //res.send("It's is a secret.");
  res.write("It's is a secret.");
  res.end();
};
app.get('/next', first, secret);


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
