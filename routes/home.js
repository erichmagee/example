// home.js - Home route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send("There's no place like home.");
});

module.exports = router;