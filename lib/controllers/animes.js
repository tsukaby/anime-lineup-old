'use strict';

var mongoose = require('mongoose');
var Anime = mongoose.model('Anime');
var ViewingHistory = mongoose.model('ViewingHistory');

/**
 * Create anime
 */
exports.create = function (req, res, next) {
  var newAnime = new Anime(req.body);
  newAnime.provider = 'local';
  newAnime.save(function (err) {
    if (err) {
      return res.json(400, err);
    }

    return res.redirect('/#/register_anime/' + req.body.year + '/' + req.body.season + '/success');

  });
};

/**
 * Search animes by title
 */
exports.searchByTitle = function (req, res) {
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
exports.searchBySeason = function (req, res) {
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

/**
 * Search animes by year and season
 */
exports.searchBySeasonForMember = function (req, res) {
  var year = req.params.year;
  var season = req.params.season;
  var userId = req.params.userId;

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
      ViewingHistory.find({
        userId: userId,
        year: year,
        season: season
      }, function (err, ViewingHistories) {
        if (err) {
          console.log(err);
          return res.json(400, err);
        }

        //データ結合
        var data = [];
        for (var i = 0; i < Animes.length; i++) {
          var tmp = Animes[i].toObject();
          tmp.status = 1;
          for (var j = 0; j < ViewingHistories.length; j++) {
            if (tmp.title === ViewingHistories[j].title) {
              tmp.status = ViewingHistories[j].status;
              break;
            }
          }
          data.push(tmp);
        }

        res.json(data);
      });
    } else {
      return res.send(err);
    }
  });
};

/**
 * Search animes by title
 */
exports.searchByTitleForMember = function (req, res) {
  var title = req.params.title;
  var userId = req.params.userId;

  if (!title) {
    // タイトルが一文字も無い場合は許可しない(全データを返すと大変になるため、防ぐ)
    return res.json([]);
  }

  return Anime.find({title: new RegExp(title, 'i')}, function (err, Animes) {
    if (!err) {
      ViewingHistory.find({
        userId: userId,
        title: new RegExp(title, 'i')
      }, function (err, ViewingHistories) {
        if (err) {
          console.log(err);
          return res.json(400, err);
        }

        //データ結合
        var data = [];
        for (var i = 0; i < Animes.length; i++) {
          var tmp = Animes[i].toObject();
          tmp.status = 1;
          for (var j = 0; j < ViewingHistories.length; j++) {
            if (tmp.title === ViewingHistories[j].title) {
              tmp.status = ViewingHistories[j].status;
              break;
            }
          }
          data.push(tmp);
        }

        res.json(data);
      });
    } else {
      return res.send(err);
    }
  });
};
