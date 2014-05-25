'use strict';

var mongoose = require('mongoose');
var ViewingHistory = mongoose.model('ViewingHistory');

/**
 * アニメの視聴状況を登録する。
 *
 * @param req
 * @param res
 * @param next
 */
exports.create = function (req, res, next) {
  var newViewingHistory = new ViewingHistory(req.body);

  var upsertObj = newViewingHistory.toObject();
  //updateには_idを消す必要があるため、消しておく
  delete upsertObj._id;

  ViewingHistory.update({
    userId: req.body.userId,
    year: req.body.animeId,
  }, upsertObj, {upsert: true}, function (err) {
    if (err) {
      console.log(err);
      return res.json(400, err);
    }
  });

  res.send(200);

};
