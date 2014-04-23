'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var SECRET_CONFIG = require('./env/secret.js');

//mongoose.set('debug', true);

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function (err, user) {
    done(err, user);
  });
});

//Twitter認証
passport.use(new TwitterStrategy({
    consumerKey: SECRET_CONFIG.TWITTER_AUTH.CONSUMER_KEY,
    consumerSecret: SECRET_CONFIG.TWITTER_AUTH.CONSUMER_SECRET,
    callbackURL: SECRET_CONFIG.TWITTER_AUTH.CALLBACK_URL
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({'twitter.id_str': profile.id }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          username: profile.username,
          provider: 'twitter',
          twitter: profile._json
        });
        user.save(function (err) {
          if (err){
            console.log(err);
          }
          return done(err, user);
        });
      }
      else {
        return done(err, user);
      }
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
    User.findOne({ 'google.id': profile.id }, function (err, user) {
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'google',
          google: profile._json
        });
        user.save(function (err) {
          if (err){
            console.log(err);
          }
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
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
    User.findOne({
      'facebook.id': profile.id
    }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'facebook',
          facebook: profile._json
        });
        user.save(function (err) {
          if (err){
            console.log(err);
          }
          return done(err, user);
        });
      }
      else {
        return done(err, user);
      }
    });
  }
));

module.exports = passport;