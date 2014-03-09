'use strict';

var mongoose = require('mongoose'),
    Anime = mongoose.model('Anime');

/**
 * Create anime
 */
exports.create = function (req, res, next) {
  var newAnime = new Anime(req.body);
  newAnime.provider = 'local';
  newAnime.save(function(err) {
    if (err) {
      return res.json(400, err);
    }
    
    return res.redirect('/#/register_anime/' + req.body.year + '/' + req.body.season + '/success');

  });
};

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
