var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/googleUser')
// var User = require('../models/googleUser');
var configAuth = require('./auth');

module.exports = function(passport) {

	

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	// passport.deserializeUser(function(id, done){
	// 	User.findById(id, function(err, user){
	// 		done(err, user);
	// 	});
	// });

	  	  passport.deserializeUser(function(obj, done) {
		done(null, obj);
	  });

	
	passport.use(new GoogleStrategy({
	    clientID: configAuth.googleAuth.clientID,
	    clientSecret: configAuth.googleAuth.clientSecret,
	    callbackURL: configAuth.googleAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
		  console.log('profile is : ' , profile.id)
		  return done(null, profile)
		}));


	


};