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

  app.get('/auth/google/callback', (req, res) => {
    console.log(req)
    res.send("MAde it, check console log")
  }
    // passport.authenticate('google', 
    // {
    //   successRedirect: '/',
    //   failureRedirect: '/'
    // })
  );


  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  })


  app.get('/profile', function (req, res) {
    
    res.render('profile', { googleUser: req.User });
  });


  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      console.log('Logged In')
      return next();
    }

    res.redirect('/login');
  }

};