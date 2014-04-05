'use strict';

//Season enum
var SeasonEnum = {
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn',
  winter: 'winter'
};


// シーズンに関する機能を提供するユーティリティ
angular.module('animeLineupApp').factory('SeasonService', function($http) {
  var seasons = [];
  $http.get('api/seasons', {cache: true}).success(function(data) {
    seasons = data;
  });
  return {
    // 現在日時から現在のシーズンを求める関数
    currentSeason: function() {
      var now = new Date();
      var year = now.getFullYear();
      var season;
      if (0 <= now.getMonth() && now.getMonth() <= 2) {
        season = SeasonEnum.winter;
      } else if (3 <= now.getMonth() && now.getMonth() <= 5) {
        season = SeasonEnum.spring;
      } else if (6 <= now.getMonth() && now.getMonth() <= 8) {
        season = SeasonEnum.summer;
      } else if (9 <= now.getMonth() && now.getMonth() <= 11) {
        season = SeasonEnum.autumn;
      }

      return {
        year: year,
        season: season
      };
    },
    //引数から次のシーズンを求める関数
    nextSeason: function(year, season) {
      if(year === null || year === undefined || year === '' || isNaN(year)){
        // 数値でない場合
        return undefined;
      }

      switch (season) {
        case 'winter':
          return {
            year: year,
            season: 'spring'
          };
        case 'spring':
          return {
            year: year,
            season: 'summer'
          };
        case 'summer':
          return {
            year: year,
            season: 'autumn'
          };
        case 'autumn':
          // アニメは冬シーズンから始まるため、秋の次は年度が増える
          return {
            year: Number(year) + 1,
            season: 'winter'
          };
        default:
          return undefined;
      }
    },
    //引数から前のシーズンを求める関数
    previousSeason: function(year, season) {
      if(year === null || year === undefined || year === '' || isNaN(year)){
        // 数値でない場合
        return undefined;
      }

      switch (season) {
        case 'winter':
          // アニメは冬シーズンから始まるため、冬の前は年度が減る
          return {
            year: Number(year) - 1,
            season: 'autumn'
          };
        case 'spring':
          return {
            year: year,
            season: 'winter'
          };
        case 'summer':
          return {
            year: year,
            season: 'spring'
          };
        case 'autumn':
          return {
            year: year,
            season: 'summer'
          };
        default:
          return undefined;
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
        if ((String(seasons[i].year) === String(season.year)) && (seasons[i].season === season.season)) {
          return true;
        }
      }

      return false;
    }
  };
});
