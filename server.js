// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt'),
  mongoose = require('mongoose');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb://localhost/simple-login');


// home route rendering index
app.get('/', function (req, res) {
  res.render('index');
});

// login route with placeholder response
app.get('/login', function (req, res) {
  res.send('login coming soon');
});

// listen on port 3000
app.listen(3000, function () {
  console.log('server started on locahost:3000');
});