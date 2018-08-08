var express = require('express');
var app = express();

// basic GET request route
app.get('/', function (req, res) {
   console.log('Simple GET request');
   res.send('Hello GET');
});

// basic POST request route
app.post('/', function (req, res) {
   console.log('Simple POST request');
   res.send('Hello POST');
});

// basic PUT request route
app.put('/', function (req, res) {
   console.log('Simple PUT request');
   res.send('Hello PUT');
});

// basic DELETE request
app.delete('/', function (req, res) {
   console.log('Simple DELETE request');
   res.send('Hello DELETE');
});