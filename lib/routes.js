'use strict';

var index = require('./controllers'),
    seasons = require('./controllers/seasons'),
    animes = require('./controllers/animes'),
    session = require('./controllers/session');
var passport = require('./config/passport');

var middleware = require('./middleware');

/**
 * Application routes
 */
module.exports = function(app) {

  //twitter
  app.get('/api/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));
  app.get('/api/auth/twitter/callback', 
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function(req, res){
      res.redirect('/');
    }
  );

  app.get('/api/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

  app.get('/api/seasons', seasons.show);

  //app.post('/api/animes', animes.create);
  app.get('/api/animes/:year/:season', animes.searchBySeason);
  app.get('/api/animes/:title', animes.searchByTitle);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
