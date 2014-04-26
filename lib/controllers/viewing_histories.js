'use strict';

var mongoose = require('mongoose');
var ViewingHistory = mongoose.model('ViewingHistory');

/**
 * Create ViewingHistory
 */
exports.create = function (req, res, next) {
  var newViewingHistory = new ViewingHistory(req.body);

  var upsertObj = newViewingHistory.toObject();
  //updateには_idを消す必要があるため、消しておく
  delete upsertObj._id;

  ViewingHistory.update({
    userId: req.body.userId,
    year: req.body.year,
    season: req.body.season,
    title: req.body.title
  }, upsertObj, {upsert: true}, function (err) {
    if (err) {
      console.log(err);
      return res.json(400, err);
    }
  });

  res.send(200);

};
