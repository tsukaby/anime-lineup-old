'use strict';

var mongoose = require('mongoose');
var Anime = mongoose.model('Anime');
var ViewingHistory = mongoose.model('ViewingHistory');
var http = require('http');
var imageCache = {};

/**
 * アニメを作成する。
 *
 * @param req
 * @param res
 * @param next
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
 * DBからタイトルでアニメを検索し、取得する。
 *
 * @param req
 * @param res
 * @returns {*}
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
 * DBからシーズンでアニメを検索し、取得する。
 *
 * @param req
 * @param res
 * @returns {*}
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
 * 会員用のシーズンによるアニメ検索。
 *
 * @param req
 * @param res
 * @returns {*}
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
        userId: userId
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
            if (tmp.animeId === ViewingHistories[j].animeId) {
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
 * 会員用のタイトルによるアニメ検索。
 *
 * @param req
 * @param res
 * @returns {*}
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
            if (tmp.animeId === ViewingHistories[j].animeId) {
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
 * サムネイル画像を取得する。
 * ハートレイルズのAPIをラップすることで、SSLに対応する。
 *
 * @param req
 * @param res
 * @param next
 */
exports.image = function (req, res, next) {
  var size = req.params.size;
  var delay = req.params.delay;
  var url = req.query.url;
  var cacheKey = url + size + delay;

  //既に画像がキャッシュされている場合はそれを返す
  if (imageCache[cacheKey]) {
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(imageCache[cacheKey], 'binary');
    return;
  }

  //ハートレイルズAPIのための設定
  var options = {
    host: 'capture.heartrails.com',
    port: 80,
    path: '/' + size + '/delay=' + delay + '?' + url
  };

  http.get(options, function (res2) {
    if (res2.statusCode === 302) {
      //res.redirect(res2.headers.location);

      //302の場合、APIが画像精製中のため、リダイレクト先の一次画像を取得する
      http.get(res2.headers.location, function (res3) {
        res3.setEncoding('binary');
        var imagedata = '';
        res3.on('data', function (chunk) {
          imagedata += chunk;
        });

        res3.on('end', function () {
          res.writeHead(200, {'Content-Type': 'image/jpeg' });
          res.end(imagedata, 'binary');
        });
      });

    } else {
      //ステータスが302以外の場合、画像を取得し返却する
      res2.setEncoding('binary');
      var imagedata = '';
      res2.on('data', function (chunk) {
        imagedata += chunk;
        imageCache[cacheKey] = imagedata;
      });

      res2.on('end', function () {
        res.writeHead(200, {'Content-Type': 'image/jpeg' });
        res.end(imagedata, 'binary');
      });
    }
  });
};