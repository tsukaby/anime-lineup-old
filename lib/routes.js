'use strict';

var index = require('./controllers');
var seasons = require('./controllers/seasons');
var animes = require('./controllers/animes');
var session = require('./controllers/session');
var viewingHistories = require('./controllers/viewing_histories');
var passport = require('./config/passport');
var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function (app) {
  // ログイン済みかを確認する機能
  var isLogined = function (req, res, next) {
    if (req.isAuthenticated()) {
      // ログイン済みの場合、処理を続ける
      return next();
    }
    // ログインしていない場合、リダイレクト
    res.redirect("/");
  };

  //twitter
  app.get('/api/auth/twitter', passport.authenticate('twitter', { scope: 'email' }));
  app.get('/api/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function (req, res) {
      res.redirect('/');
    }
  );

  //google
  app.get('/api/auth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

  app.get('/api/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    }
  );

  //facebook
  app.get('/api/auth/facebook', passport.authenticate('facebook', {
    scope: [ 'email', 'user_about_me']
  }));

  app.get('/api/auth/facebook/callback', passport.authenticate('facebook', {
      failureRedirect: '/login'
    }),
    function (req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.get('/api/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  app.get('/api/seasons', seasons.show);

  //app.post('/api/animes', animes.create);
  app.get('/api/img/animes/:size/:delay', animes.image);
  app.get('/api/animes/:year/:season', animes.searchBySeason);
  app.get('/api/animes/:title', animes.searchByTitle);

  app.get('/api/members/animes/:userId/:title', isLogined, animes.searchByTitleForMember);
  app.get('/api/members/animes/:userId/:year/:season', isLogined, animes.searchBySeasonForMember);

  //視聴履歴
  app.post('/api/viewing_histories', isLogined, viewingHistories.create);

  // All undefined api routes should return a 404
  app.get('/api/*', function (req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
