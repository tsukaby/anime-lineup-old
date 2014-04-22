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
object.F = function() {
};

//Animeクラス
var Anime = {
  title: 'title',
  url: 'http://',
  thumbnailDelay: 0,
  getTitle: function() {
    return this.title;
  },
  getURL: function() {
    return this.url;
  },
  getThumbnailURL: function() {
    return 'http://capture.heartrails.com/400x400/delay=' + this.thumbnailDelay + '?' + this.url;
  },
  getThumbnailURL2: function(sizeX, sizeY) {
    return 'http://capture.heartrails.com/' + sizeX + 'x' + sizeY + '/delay=' + this.thumbnailDelay + '?' + this.url;
  },
  getEncodedURL: function() {
    return encodeURIComponent(this.url);
  },
  getHatebuURL: function() {
    return 'http://b.hatena.ne.jp/entry/' + this.url;
  },
  getFacebookButtonURL: function() {
    return 'http://www.facebook.com/plugins/like.php?href=' + this.getURL() + '&width&layout=box_count&action=like&show_faces=false&share=false&height=65&appId=215921371931439';
  },
  getWikipediaURL: function() {
    return 'http://ja.wikipedia.org/wiki/' + this.getTitle();
  }
};

angular.module('animeLineupApp').service('AnimeSearchService', function($http, AnimesValue, SeasonConstant) {
  this.searchByTitle = function(title) {
    if(title === undefined){
      return;
    }

    //すべてのアニメの一覧からタイトルで検索
    $http.get('/api/animes/' + title, {cache: true}).success(function(data) {
      var animes = [];
      for (var i = 0; i < data.length; i++) {
        //オブジェクト作成
        var obj = object(Anime, data[i]);
        animes.push(obj);
      }
      
      AnimesValue.animes = animes;
    });
  };

  this.searchBySeason = function(year, season) {
    if(year === undefined || season === undefined){
      return;
    }

    //すべてのアニメからシーズンで検索
    $http.get('/api/animes/' + year + '/' + season, {cache: true}).success(function(data) {
      var animes = [];
      for (var i = 0; i < data.length; i++) {
        //オブジェクト作成
        var obj = object(Anime, data[i]);
        animes.push(obj);
      }
      
      AnimesValue.animes = animes;
    });
  };

  this.searchByDefault = function() {
    var year = SeasonConstant.year;
    var season = SeasonConstant.season;

    this.searchBySeason(year, season);
  };
});
