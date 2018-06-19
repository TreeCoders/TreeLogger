//******************************************************************************************************** */
//******************************************************************************************************** */

//Google OAuth 

//******************************************************************************************************** */
//******************************************************************************************************** */
var googleUser = require("../models/googleUser");
var passport = require('../config/passport')
module.exports = function (app, passport) {

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback',  passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    }));
 

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('Logged In')
      return next();
    }

    // res.redirect('/login');
  }

};