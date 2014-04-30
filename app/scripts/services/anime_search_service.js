'use strict';

/*
 * object - オブジェクトを作る
 * Object object(BaseObj [, mixinObj1 [, mixinObj2...]])
 * http://blog.tojiru.net/article/199670885.html
 */
function object(o) {
  var F = object.F, i, len, n, prop;
  F.prototype = o;
  n = new F();
  for (i = 1, len = arguments.length; i < len; ++i) {
    for (prop in arguments[i]) {
      n[prop] = arguments[i][prop];
    }
  }
  return n;
}
object.F = function () {
};

/**
 * Animeクラス
 *
 * @type {{title: string, url: string, thumbnailDelay: number, getTitle: getTitle, getURL: getURL, getThumbnailURL: getThumbnailURL, getThumbnailURL2: getThumbnailURL2, getEncodedURL: getEncodedURL, getHatebuURL: getHatebuURL, getFacebookButtonURL: getFacebookButtonURL, getWikipediaURL: getWikipediaURL}}
 */
var Anime = {
  title: 'title',
  url: 'http://',
  thumbnailDelay: 0,
  getTitle: function () {
    return this.title;
  },
  getURL: function () {
    return this.url;
  },
  getThumbnailURL: function () {
    return '/api/img/animes/400x400/' + this.thumbnailDelay + '?url=' + this.url;
  },
  getThumbnailURL2: function (sizeX, sizeY) {
    return '/api/img/animes/' + sizeX + 'x' + sizeY + '/' + this.thumbnailDelay + '?url=' + this.url;
  },
  getEncodedURL: function () {
    return encodeURIComponent(this.url);
  },
  getHatebuURL: function () {
    return 'http://b.hatena.ne.jp/entry/' + this.url;
  },
  getFacebookButtonURL: function () {
    return 'https://www.facebook.com/plugins/like.php?href=' + this.getURL() + '&width&layout=box_count&action=like&show_faces=false&share=false&height=65&appId=215921371931439';
  },
  getWikipediaURL: function () {
    return 'http://ja.wikipedia.org/wiki/' + this.getTitle();
  }
};

angular.module('animeLineupApp').service('AnimeSearchService', function ($http, $rootScope) {

  /**
   * タイトルによるアニメ検索。
   *
   * @param {string} [title] 検索するアニメのタイトル
   */
  this.searchByTitle = function (title) {
    if (!title) {
      return;
    }

    //すべてのアニメの一覧からタイトルで検索
    if (!$rootScope.currentUser) {
      $http.get('/api/animes/' + title, {cache: true}).success(function (data) {
        var animes = [];
        for (var i = 0; i < data.length; i++) {
          //オブジェクト作成
          var obj = object(Anime, data[i]);
          animes.push(obj);
        }

        $rootScope.animes = animes;
      });
    } else {
      $http.get('/api/members/animes/' + $rootScope.currentUser.userId + '/' + title, {cache: true}).success(function (data) {
        var animes = [];
        for (var i = 0; i < data.length; i++) {
          //オブジェクト作成
          var obj = object(Anime, data[i]);
          animes.push(obj);
        }

        $rootScope.animes = animes;
      });
    }
  };

  /**
   * シーズンによるアニメ検索。
   *
   * @param {number} year 検索するアニメの放送年
   * @param {string} season 検索するアニメの季節
   * @param {Function} callback 検索完了後のコールバック関数
   */
  this.searchBySeason = function (year, season, callback) {
    if (!year || !season) {
      return;
    }

    //すべてのアニメからシーズンで検索
    if (!$rootScope.currentUser) {
      $http.get('/api/animes/' + year + '/' + season, {cache: true}).success(function (data) {
        var animes = [];
        for (var i = 0; i < data.length; i++) {
          //オブジェクト作成
          var obj = object(Anime, data[i]);
          animes.push(obj);
        }

        $rootScope.animes = animes;
        callback();
      });
    } else {
      $http.get('/api/members/animes/' + $rootScope.currentUser.userId + '/' + year + '/' + season, {cache: true}).success(function (data) {
        var animes = [];
        for (var i = 0; i < data.length; i++) {
          //オブジェクト作成
          var obj = object(Anime, data[i]);
          animes.push(obj);
        }

        $rootScope.animes = animes;
        callback();
      });
    }
  };

  /**
   * 特に条件を指定しないアニメ検索。現在の日時を基準としたシーズン検索を実行する。
   *
   * @param {Function} callback 検索完了後のコールバック関数
   */
  this.searchByDefault = function (callback) {
    var year = $rootScope.season.year;
    var season = $rootScope.season.season;

    this.searchBySeason(year, season, callback);
  };
});
