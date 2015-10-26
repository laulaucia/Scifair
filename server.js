// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session');
// fair data for the db
//var fairsJson = require('fairs');

// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: 'SuperSecretCookie',
  	cookie: { maxAge: 30 * 60 * 1000 }
}));


// commenting this out helped heroku work? not sure why though
//mongoose.connect('mongodb://localhost/scifair');

// create a user 
app.post('/users', function (req, res) {
  console.log(req.body);
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('/dashboard');
  });
});


// home route rendering index
app.get('/', function (req, res) {
  res.render('index');
});

// Route with placeholder to map results page
app.get('/map', function(req, res){
	red.render('map');
});


// dashboard route with placeholder response
app.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

// listen on port 3000
app.listen(process.env.PORT || 3000);
