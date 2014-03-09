'use strict';

var mongoose = require('mongoose'),
    Anime = mongoose.model('Anime');

/**
 * Get animes
 */
exports.show = function(req, res) {
  return Anime.find(function (err, Animes) {
    if (!err) {
      return res.json(Animes);
    } else {
      return res.send(err);
    }
  });
};
