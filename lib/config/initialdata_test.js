'use strict';

var mongoose = require('mongoose');
var Anime = mongoose.model('Anime');
var Season = mongoose.model('Season');
var User = mongoose.model('User');
var ViewingHistory = mongoose.model('ViewingHistory');

//Clear old seasons, then add default seasons
Season.find({}).remove(function () {
  Season.create(
    {
      year: "2010",
      season: "winter",
      name: "2010年 冬",
      link: "#/2010/winter/"
    }, function () {
      console.log('finished populating seasons');
    }
  );
});

//Clear old animes, then add default animes
Anime.find({}).remove(function () {
  Anime.create(
    {
      animeId: 1,
      title: "test_title1",
      url: "http://example.com/test1",
      thumbnailDelay: 0,
      season: "winter",
      year: 2010
    },
    {
      animeId: 2,
      title: "test_title2",
      url: "http://example.com/test2",
      thumbnailDelay: 0,
      season: "winter",
      year: 2010
    }, function () {
      console.log('finished populating animes');
    }
  );
});

//Clear old data, then add default values
ViewingHistory.find({}).remove(function () {
  ViewingHistory.create(
    {
      userId: 'test001',
      animeId: 1,
      status: 0
    }, function () {
      console.log('finished populating viewing_histories');
    });
});

// Clear old users
User.find({}).remove(function () {
});
