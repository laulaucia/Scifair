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

// creating  a user ///
app.post('/users', function (req, res) {
  console.log(req.body);
  User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    req.session.userId = newUser._id;
    res.redirect('/dashboard');
  });
});

// authenticate the user and set the session
app.post('/sessions', function (req, res) {
  // call authenticate function to check if password user entered is correct
  User.authenticate(req.body.email, req.body.password, function (err, loggedInUser) {
    if (err){
      console.log('authentication error: ', err);
      res.status(500).send();
    } else {
      console.log('setting sesstion user id ', loggedInUser._id);
      req.session.userId = loggedInUser._id;
      res.redirect('/dashboard');
    }
  });
});

// show user dashboard page
app.get('/dashboard', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  User.findOne({_id: req.session.userId}, function (err, currentUser) {
    if (err){
      console.log('database error: ', err);
      res.redirect('/');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('dashboard', {user: currentUser});
    }
  });
});

app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to main page (for now)
  res.redirect('/');
});

// home route rendering index
app.get('/', function (req, res) {
  res.render('index');
});

// Route to map results page
app.get('/map', function(req, res){
	res.render('map');
});


// route to dashboard for editing
app.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

// listen on port 3000
app.listen(process.env.PORT || 3000);
