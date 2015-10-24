// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  bcrypt = require('bcrypt'),
  expressSession = require('express-session'),
  mongoose = require('mongoose');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
// commenting this out helped heroku work? not sure why though
//mongoose.connect('mongodb://localhost/scifair');


// home route rendering index
app.get('/', function (req, res) {
  res.render('index');
});

// Route with placeholder to results page
app.get('/results', function(req, res){
	red.send("this page will have results rendered on a map");
});


// dashboard route with placeholder response
app.get('/dashboard', function (req, res) {
  res.send('dashboard coming soon');
});

// listen on port 3000
app.listen(process.env.PORT || 3000);
