'use strict';

var mongoose = require('mongoose');
var passport = require('passport');

/**
 * ログアウトする。
 *
 * @param req
 * @param res
 */
exports.logout = function (req, res) {
  req.logout();
  res.send(200);
};

/**
 * ログインする。
 *
 * @param req
 * @param res
 * @param next
 */
exports.login = function (req, res, next) {
  passport.authenticate('twitter');
};
