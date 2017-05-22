const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 8080;
const mockData = require('./MOCK_DATA');

// Static Files
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// fs.readFile('./MOCK_DATA.json', 'utf8', function (err, data) {
//   if (err) console.log('Error: ' + err);
//   var jsonData = JSON.parse(data);
//   // console.log("Inside!: ", obj); //works!
// });

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/load', function(req, res) {
  res.json(mockData);
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});


// app.use(express.static(path.join(__dirname, "MOCK_DATA")));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
