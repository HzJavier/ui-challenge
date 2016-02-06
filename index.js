var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

var PORT = 8080;
app.listen(PORT, function () {
  console.log('App started on ' + PORT);
});
