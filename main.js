var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/ui' + '/index.html');
})
 
app.listen(3004);
console.log('listening');
