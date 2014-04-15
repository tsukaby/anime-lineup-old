'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var AUTH_CONFIG = require('./env/secret.js');
/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  done(null, {id: user.twitter.id, token: user.twitter.token});
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});

//ここからTwitter認証の記述

passport.use(new TwitterStrategy({
    consumerKey: AUTH_CONFIG.TWITTER_AUTH.CONSUMER_KEY,
    consumerSecret: AUTH_CONFIG.TWITTER_AUTH.CONSUMER_SECRET,
    callbackURL: AUTH_CONFIG.TWITTER_AUTH.CALLBACK_URL
  },
  function(token, tokenSecret, profile, done) {
    User.findOrCreate({twitter: {
      id: profile.id,
      token: token,
      displayName: profile.displayName,
      username: profile.username
    }}, function(err, user) {
      if (err) {
        return done(err);
      }
      done(null, user);
    });
  }
));


module.exports = passport;