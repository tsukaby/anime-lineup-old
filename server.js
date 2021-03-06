'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
if (process.env.NODE_ENV === 'development') {
  // 開発環境用起動の場合はテスト用データをDBに投入
  require('./lib/config/initialdata_dev');
} else if (process.env.NODE_ENV === 'test') {
  // テスト環境用起動の場合はテスト用データをDBに投入
  require('./lib/config/initialdata_test');
}

// Passport Configuration
var passport = require('./lib/config/passport');

var app = express();

// Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes')(app);

// Start server
app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;