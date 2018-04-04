// example.js - Main module

const firstArgIndex = 2;
let greeting = process.argv[firstArgIndex];

var express = require('express');
var app = express();

let home = require('../routes/home.js');
let wiki = require('../routes/wiki.js');
let healthMonitor = require('../routes/healthMonitor.js');

app.use('/', home);
app.use('/wiki', wiki);
app.use('/healthMonitor', healthMonitor);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});