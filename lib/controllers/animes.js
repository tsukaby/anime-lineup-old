'use strict';

var mongoose = require('mongoose');
var Anime = mongoose.model('Anime');

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
 * Search animes by title
 */
exports.searchByTitle = function(req, res) {
  var title = req.params.title;

  if (!title) {
    // タイトルが一文字も無い場合は許可しない(全データを返すと大変になるため、防ぐ)
    return res.json([]);
  }

  return Anime.find({title: new RegExp(title, 'i')}, function (err, Animes) {
    if (!err) {
      return res.json(Animes);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Search animes by year and season
 */
exports.searchBySeason = function(req, res) {
  var year = req.params.year;
  var season = req.params.season;

  if (!year || isNaN(year)) {
    // 数値でない場合
    return res.json([]);
  }

  if (!season) {
    // シーズンがない場合
    return res.json([]);
  }

  return Anime.find({year: year, season: season}, function (err, Animes) {
    if (!err) {
      return res.json(Animes);
    } else {
      return res.send(err);
    }
  });
};
