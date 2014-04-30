'use strict';

/**
 * Season enum
 * 季節を表現する。
 *
 * @type {{spring: string, summer: string, autumn: string, winter: string}}
 */
var SeasonEnum = {
  spring: 'spring',
  summer: 'summer',
  autumn: 'autumn',
  winter: 'winter'
};


// シーズンに関する機能を提供するユーティリティ
angular.module('animeLineupApp').factory('SeasonService', function ($http) {
  var seasons = [];
  $http.get('/api/seasons', {cache: true}).success(function (data) {
    seasons = data;
  });
  return {

    /**
     * 現在日時から現在のシーズンを取得する
     *
     * @returns {{year: number, season: *}} 現在のシーズン
     */
    currentSeason: function () {
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

    /**
     * 引数で指定したシーズンの次のシーズンを取得する。
     *
     * @param year シーズンの年
     * @param season シーズンの季節
     * @returns {*} 次のシーズン
     */
    nextSeason: function (year, season) {
      if (!year || isNaN(year)) {
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

    /**
     * 引数で指定したシーズンの前のシーズンを取得する。
     *
     * @param year シーズンの年
     * @param season シーズンの季節
     * @returns {*} 前のシーズン
     */
    previousSeason: function (year, season) {
      if (!year || isNaN(year)) {
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

    /**
     * シーズンを日本語に変換した文字列を取得する。
     *
     * @param season シーズン
     * @returns {*} シーズンの日本語名
     */
    toJapaneseForSeason: function (season) {
      var seasons = {'spring': '春', 'summer': '夏', 'autumn': '秋', 'winter': '冬'};
      return seasons[season];
    },

    /**
     * データが存在し、選択可能なシーズンの一覧を取得する。
     *
     * @returns {Array} シーズンの一覧
     */
    getSeasons: function () {
      return seasons;
    },

    /**
     * 引数で指定したシーズンが、選択可能なシーズンであるかどうかを確認する。
     *
     * @param season 調べるシーズン
     * @returns {boolean} trueの場合、選択可能である
     */
    hasSeasons: function (season) {
      for (var i = 0; i < seasons.length; i++) {
        if ((String(seasons[i].year) === String(season.year)) && (seasons[i].season === season.season)) {
          return true;
        }
      }

      return false;
    }
  };
});
