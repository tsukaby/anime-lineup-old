'use strict';

var mongoose = require('mongoose'),
  Anime = mongoose.model('Anime'),
  Season = mongoose.model('Season'),
  User = mongoose.model('User');

//Clear old seasons, then add default seasons
Season.find({}).remove(function() {
  Season.create({
    year: "2010",
    season: "winter",
    name: "2010年 冬",
    link: "#/2010/winter/"
  }, function() {
      console.log('finished populating seasons');
    }
  );
});

//Clear old animes, then add default animes
Anime.find({}).remove(function() {
  Anime.create({
    title: "test_title1",
    url: "http://example.com/test1",
    thumbnailDelay: 0,
    season: "winter",
    year: 2010
  },
  {
    title: "test_title2",
    url: "http://example.com/test2",
    thumbnailDelay: 0,
    season: "winter",
    year: 2010
  }, function() {
      console.log('finished populating animes');
    }
  );
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
