'use strict';

var mongoose = require('mongoose');
var Season = mongoose.model('Season');

/**
 * Get seasons
 */
exports.show = function(req, res) {
  return Season.find(function (err, Seasons) {
    if (!err) {
      return res.json(Seasons);
    } else {
      return res.send(err);
    }
  });
};
