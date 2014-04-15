'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var SECRET_CONFIG = require('./env/secret.js');

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  done(null, {id: user.twitter.id, token: user.twitter.token});
});
passport.deserializeUser(function(id, done) {
  done(null, id);
});

//Twitter認証
passport.use(new TwitterStrategy({
    consumerKey: SECRET_CONFIG.TWITTER_AUTH.CONSUMER_KEY,
    consumerSecret: SECRET_CONFIG.TWITTER_AUTH.CONSUMER_SECRET,
    callbackURL: SECRET_CONFIG.TWITTER_AUTH.CALLBACK_URL
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

//Google認証
passport.use(new GoogleStrategy({
    clientID: SECRET_CONFIG.GOOGLE_AUTH.CLIENT_ID,
    clientSecret: SECRET_CONFIG.GOOGLE_AUTH.CLIENT_SECRET,
    callbackURL: SECRET_CONFIG.GOOGLE_AUTH.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({google: {
      id: profile.id,
      token: accessToken,
      displayName: profile.displayName,
      username: profile._json.name
    }}, function (err, user) {
      return done(err, user);
    });
  }
));

//Facebook認証
passport.use(new FacebookStrategy({
    clientID: SECRET_CONFIG.FACEBOOK_AUTH.CLIENT_ID,
    clientSecret: SECRET_CONFIG.FACEBOOK_AUTH.CLIENT_SECRET,
    callbackURL: SECRET_CONFIG.FACEBOOK_AUTH.CALLBACK_URL,
    enableProof: false
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({facebook: {
      id: profile.id,
      token: accessToken,
      displayName: profile.displayName,
      username: profile.username
    }}, function (err, user) {
      return done(err, user);
    });
  }
));

module.exports = passport;