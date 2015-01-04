'use strict';

var express = require('express');
var path = require('path');
var config = require('./config');
var passport = require('passport');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');

var CONFIG = require('./env/secret.js');

/**
 * Express configuration
 */
module.exports = function (app) {
  if (app.get('env') === 'development') {
    app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });

    app.use(express.static(path.join(config.root, '.tmp')));
    app.use(express.static(path.join(config.root, 'app')));
    app.use(errorHandler());

    app.set('views', config.root + '/app/views');
  } else if (app.get('env') === 'production') {
    app.use(express.favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.set('views', config.root + '/views');
    app.use(express.timeout(120000));
    //httpアクセスをhttpsにリダイレクト
    app.use(function (req, res, next) {
      var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
      if (schema === 'https') {
        next();
      } else {
        res.redirect('https://' + req.headers.host + req.url);
      }
    });
  }

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());

  // Persist sessions with mongoStore

  app.use(session({
    secret: CONFIG.EXPRESS_SESSION_KEY,
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
      url: config.mongo.uri,
      collection: 'sessions'
    }, function () {
      console.log("db connection open");
    })
  }));

  //use passport session
  app.use(passport.initialize());
  app.use(passport.session());

};
