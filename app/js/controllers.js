'use strict';

/*
 * object - オブジェクトを作る
 * Object object(BaseObj [, mixinObj1 [, mixinObj2...]])
 * http://blog.tojiru.net/article/199670885.html
 */
function object(o) {
  var f = object.f, i, len, n, prop;
  f.prototype = o;
  n = new f;
  for (i = 1, len = arguments.length; i < len; ++i)
    for (prop in arguments[i])
      n[prop] = arguments[i][prop];
  return n;
}
object.f = function() {
};

//Animeクラス
var Anime = {
  title: "title",
  url: "http://",
  thumbnailDelay: 0,
  getTitle: function() {
    return this.title;
  },
  getURL: function() {
    return this.url;
  },
  getThumbnailURL: function() {
    return "http://capture.heartrails.com/200x200/delay=" + this.thumbnailDelay + "?" + this.url;
  },
  getEncodedURL: function() {
    return encodeURIComponent(this.url);
  },
  getHatebuURL: function() {
    return "http://b.hatena.ne.jp/entry/" + this.url;
  },
  getFacebookButtonURL: function() {
    return "http://www.facebook.com/plugins/like.php?href=" + this.getEncodedURL() + "&amp;width&amp;layout=box_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=65";
  }
};

//Seasonクラス
var Season = {
  name: "冬",
  year: 2000,
  getFullName: function() {
    return this.year + "年 " + this.name;
  }
};

//Season enum
var SeasonEnum = {
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
  winter: "winter"
};

//引数から次のシーズンを求める関数
var nextSeason = function(year, season) {
  switch (season) {
    case "winter":
      return {
        year: year,
        season: "spring"
      };
      break;
    case "spring":
      return {
        year: year,
        season: "summer"
      };
      break;
    case "summer":
      return {
        year: year,
        season: "autumn"
      };
      break;
    case "autumn":
      // アニメは冬シーズンから始まるため、秋の次は年度が増える
      return {
        year: Number(year) + 1,
        season: "winter"
      };
      break;
  }
};

//引数から前のシーズンを求める関数
var previousSeason = function(year, season) {
  switch (season) {
    case "winter":
      // アニメは冬シーズンから始まるため、冬の前は年度が減る
      return {
        year: Number(year) - 1,
        season: "autumn"
      };
      break;
    case "spring":
      return {
        year: year,
        season: "winter"
      };
      break;
    case "summer":
      return {
        year: year,
        season: "spring"
      };
      break;
    case "autumn":
      return {
        year: year,
        season: "summer"
      };
      break;
  }
};

var toJapaneseForSeason = function(season) {
  var seasons = {"spring": "春", "summer": "夏", "autumn": "秋", "winter": "冬"};
  return seasons[season];
};

/* Controllers */
angular.module("myApp.controllers", []).controller("simpleController", function($scope, $http, $routeParams, $rootScope, $location) {

  $scope.changeSeason = function(year, season) {
    //オブジェクト作成
    $http.get("data/" + year + "_" + season + ".json").success(function(data) {
      var arr = [];
      for (var i = 0; i < data.length; i++) {
        arr.push(object(Anime, data[i]));
      }

      $scope.animes = arr;
    });

  };
  // パラメタに対するシーズンの一覧を表示
  return $rootScope.$on("$routeChangeSuccess", function(event, current) {

    //現在のシーズンを設定
    $scope.currentSeason = $routeParams.year + "年 " + toJapaneseForSeason($routeParams.season);

    var previous = previousSeason($routeParams.year, $routeParams.season);
    var next = nextSeason($routeParams.year, $routeParams.season);

    //前と次のシーズンのリンクを設定
    $scope.previousSeason = "#/" + previous.year + "/" + previous.season;
    $scope.nextSeason = "#/" + next.year + "/" + next.season;

    $scope.changeSeason($routeParams.year, $routeParams.season);
  });
}).controller("seasonsController", function($scope) {
  var arr = [];

  arr.push(object(Season, {
    name: "冬",
    year: 2014
  }));
  arr.push(object(Season, {
    name: "春",
    year: 2014
  }));
  arr.push(object(Season, {
    name: "夏",
    year: 2014
  }));
  arr.push(object(Season, {
    name: "秋",
    year: 2014
  }));

  $scope.seasons = arr;
});