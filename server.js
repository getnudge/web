
var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.sendFile(__dirname + '/src/index.html');
});

app.get('/analytics', function(req, res){
    res.sendFile(__dirname + '/src/analytics.html');
  });
app.get('/settings', function(req, res){
    res.sendFile(__dirname + '/src/extensions.html');
  });
app.get('/friends', function(req, res){
    res.sendFile(__dirname + '/src/yourfriends.html');
   });
app.listen(3000);
console.log('Express started on port 3000');

