//******************************************************************************************************** */
//******************************************************************************************************** */

//Google OAuth 

//******************************************************************************************************** */
//******************************************************************************************************** */
var googleUser = require("../models/googleUser");
var passport = require('../config/passport')
module.exports = function (app, passport) {
  app.get('/', (req, res)=> {
    res.send("Hi")
  })

  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get('/auth/google/callback',  passport.authenticate('google', {
      successRedirect: '/',
      failureRedirect: '/login'
    })
    // function(req, res) {
    //  res.send('HeLl Yeah', req.user) 
    
    // } 
  )
     

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  })


  app.get('/profile', isLoggedIn,  function (req, res) {
    // res.send(req.user)
    res.render('profile', { googleUser: req.user.displayName });
  });




  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('Logged In')
      return next();
    }

    // res.redirect('/login');
  }

};