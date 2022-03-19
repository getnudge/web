
var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});

app.get('/dashboard', function(req, res){
    res.sendFile(__dirname + '/src/dashboard.html');
  });
  


app.listen(3000);
console.log('Express started on port 3000');

