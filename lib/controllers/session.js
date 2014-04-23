'use strict';

var mongoose = require('mongoose');
var passport = require('passport');

/**
 * Logout
 */
exports.logout = function (req, res) {
  req.logout();
  res.send(200);
};

exports.login = function (req, res, next) {
  passport.authenticate('twitter');
};
