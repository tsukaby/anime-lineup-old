'use strict';

var mongoose = require('mongoose'),
    ViewingHistory = mongoose.model('ViewingHistory');

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
  }, upsertObj, {upsert: true}, function(err){
    if(err){
      console.log(err);
      return res.json(400, err);
    }
  });

  res.send(200);

};

/**
 * 
 */
exports.show = function(req, res) {

  ViewingHistory.find({
    userId: req.params.userId,
    year: req.params.year,
    season: req.params.season
  }, function(err, docs){
    if(err){
      console.log(err);
      return res.json(400, err);
    }

    res.json(docs);
  });
};
