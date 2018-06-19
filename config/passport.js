var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/googleUser')
const db = require("../models/api");
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
				db.User.create({

					userName: obj.id,
					firstName: obj.name.givenName,
					lastName: obj.name.familyName,
					email: obj.emails[0].value,
					userImg: obj.photos[0].value,

				}).then (newUser => {
					done(null, newUser)
				});
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