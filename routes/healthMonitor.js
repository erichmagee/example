// healthMonitor.js - Health monitor route module

var express = require('express');
var router = express.Router();

// Health monitor route
router.get('/', function(req, res) {
  res.send('I feel fine!');
});

module.exports = router;