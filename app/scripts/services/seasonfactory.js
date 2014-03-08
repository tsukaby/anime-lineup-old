'use strict';

// シーズンに関する機能を提供するユーティリティ
angular.module('animeLineupApp').factory('seasonFactory', function($http) {
  var seasons;
  $http.get('data/seasons.json', {cache: true}).success(function(data) {
    seasons = data;
  });
  return {
    // 現在日時から現在のシーズンを求める関数
    currentSeason: function() {
      var now = new Date();
      var year = now.getFullYear();
      var season;
      if (1 <= now.getMonth() && now.getMonth() <= 3) {
        season = SeasonEnum.winter;
      } else if (4 <= now.getMonth() && now.getMonth() <= 6) {
        season = SeasonEnum.spring;
      } else if (7 <= now.getMonth() && now.getMonth() <= 9) {
        season = SeasonEnum.summer;
      } else if (10 <= now.getMonth() && now.getMonth() <= 12) {
        season = SeasonEnum.autumn;
      }

      return {
        year: year,
        season: season
      };
    },
    //引数から次のシーズンを求める関数
    nextSeason: function(year, season) {
      switch (season) {
        case 'winter':
          return {
            year: year,
            season: 'spring'
          };
          break;
        case 'spring':
          return {
            year: year,
            season: 'summer'
          };
          break;
        case 'summer':
          return {
            year: year,
            season: 'autumn'
          };
          break;
        case 'autumn':
          // アニメは冬シーズンから始まるため、秋の次は年度が増える
          return {
            year: Number(year) + 1,
            season: 'winter'
          };
          break;
      }
    },
    //引数から前のシーズンを求める関数
    previousSeason: function(year, season) {
      switch (season) {
        case 'winter':
          // アニメは冬シーズンから始まるため、冬の前は年度が減る
          return {
            year: Number(year) - 1,
            season: 'autumn'
          };
          break;
        case 'spring':
          return {
            year: year,
            season: 'winter'
          };
          break;
        case 'summer':
          return {
            year: year,
            season: 'spring'
          };
          break;
        case 'autumn':
          return {
            year: year,
            season: 'summer'
          };
          break;
      }
    },
    //季節名を日本語に変える関数
    toJapaneseForSeason: function(season) {
      var seasons = {'spring': '春', 'summer': '夏', 'autumn': '秋', 'winter': '冬'};
      return seasons[season];
    },
    // 選択可能なシーズンの一覧
    getSeasons: function() {
      return seasons;
    },
    // 選択可能なシーズンの一覧に引数で指定したシーズンが含まれているかを調べる
    // true: 含まれている
    hasSeasons: function(season) {
      for (var i = 0; i < seasons.length; i++) {
        if ((seasons[i].year == season.year) && (seasons[i].season == season.season)) {
          return true;
        }
      }

      return false;
    }
  };
});
