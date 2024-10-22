const Joi = require('joi');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const express = require('express');
const router = express.Router();


  passport.use(
    new GoogleStrategy(
      {
        clientID:"1027897759182 - qiglu7ph1gmegkjb81u368gbhse94c4t.apps.googleusercontent.com",
        clientSecret:"GOCSPX - Pv - JcD5DJMKlTiyDaY94KNbI9yX6",
        callbackURL:'http://localhost:3000/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, cb) {
        done(null, profile);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

  router.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );
  router.get('/', function (req, res) {
    res.send('Hello, authenticated!');
  });


module.exports = router;
