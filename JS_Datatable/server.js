var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, MOCK_DATA)));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
