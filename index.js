var express = require('express');
var app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs");

app.post('/send', function(req, res) {
  fs.appendFile('msg.txt', req.body.msg, function (err) {
  if (err) throw err;
  console.log('Saved!');
  req.body.msg =""
});
});

app.get('/', function(req, res) {
  res.sendFile("/index.html", { root: '.' });
});

app.listen(5000);