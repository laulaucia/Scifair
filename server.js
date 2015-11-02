// require express framework and additional modules
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  request = require('request'),
  db = require('./models');
require("dotenv").load();
////////// middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	saveUninitialized: true,
	resave: true,
	secret: process.env.FAIRSESSION,
  	cookie: { maxAge: 30 * 60 * 1000 }
}));
////////////////////////////////// creating  a user /////////////////////////////////////
app.post('/users', function (req, res) {
  console.log(req.body);
  db.User.createSecure(req.body.email, req.body.password, function (err, newUser) {
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
////////////// SEARCHING FOR A FAIR/////////////////////
app.get('/api/search', function(req, res){
  console.log(req.query);
  db.Fair.find(req.query, function(err, fairs){
    if(err){
      console.log("we have an error");}
    console.log(fairs);
    res.json(fairs);
  });
});
///////////////////LOGOUT////////////////////////
app.get('/logout', function (req, res) {
  // remove the session user id
  req.session.userId = null;
  // redirect to main page (for now)
  res.redirect('/');
});
////////////////////////////ROUTES////////////////////////////////
// home route rendering index
app.get('/', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
    if (err){
      console.log('database error: ', err);
      res.redirect('/');
    } else {
      // render profile template with user's data
      console.log('loading profile of logged in user');
      res.render('index', {user: currentUser});
    }
  });
});
// LOGIN USER AND SHOW THEM THE DASHBOARD PAGE
app.get('/dashboard', function (req, res) {
  console.log('session user id: ', req.session.userId);
  // find the user currently logged in
  if (req.session.userId === undefined) {
    res.redirect('/');
  } else {
    db.User.findOne({_id: req.session.userId}, function (err, currentUser) {
      if (err){
        console.log('database error: ', err);
        res.redirect('/');
      } else {
        // render profile template with user's data
        console.log('loading profile of logged in user');
        res.render('dashboard', {user: currentUser});
      }
    });
  }  
});
//CREATING A NEW FAIR IN THE DASHBOARD
app.post('/fairs', function(req, res){
  db.Fair.create(req.body, function(err, newfair){
    if (err)console.log(err);
    console.log(newfair);
    res.json(newfair);
  });
});
// listen on port 3000
app.listen(process.env.PORT || 3000);
