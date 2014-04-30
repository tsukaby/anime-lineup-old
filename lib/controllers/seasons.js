'use strict';

var mongoose = require('mongoose');
var Season = mongoose.model('Season');

/**
 * シーズンの一覧を取得する。
 *
 * @param req
 * @param res
 * @returns {*}
 */
exports.show = function (req, res) {
  return Season.find(function (err, Seasons) {
    if (!err) {
      return res.json(Seasons);
    } else {
      return res.send(err);
    }
  });
};
