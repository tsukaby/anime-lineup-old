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

/* Controllers */
angular.module("myApp.controllers", []).controller("seasonNavigationController", function($scope, $http, $routeParams, $rootScope, $location, seasonService) {
  // パラメタに対するシーズンの一覧を表示
  return $rootScope.$on("$routeChangeSuccess", function(event, current) {
    //現在のシーズンを設定
    var year;
    var season;
    // 現在のシーズンを設定
    // TODO:不正なパラメータのエラー処理
    if ($routeParams.year === undefined || $routeParams.season === undefined) {
      //パラメタなしアクセスの場合は現在日付から現在シーズンを求める
      var current = seasonService.currentSeason();
      year = current.year;
      season = current.season;
    } else {
      year = $routeParams.year;
      season = $routeParams.season;
    }

    //現在のシーズンを設定
    $scope.currentSeason = year + "年 " + seasonService.toJapaneseForSeason(season);

    //前と次のシーズンのリンクを設定

    var previous = seasonService.previousSeason(year, season);
    var next = seasonService.nextSeason(year, season);
    $scope.previousSeason = "#/" + previous.year + "/" + previous.season;
    $scope.nextSeason = "#/" + next.year + "/" + next.season;
  });
}).controller("animeListController", function($scope, $http, $routeParams, $rootScope, $location, seasonService) {
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

  var year;
  var season;
  // 現在のシーズンを設定
  // TODO:不正なパラメータのエラー処理
  if ($routeParams.year === undefined || $routeParams.season === undefined) {
    //パラメタなしアクセスの場合は現在日付から現在シーズンを求める
    var current = seasonService.currentSeason();
    year = current.year;
    season = current.season;
  } else {
    year = $routeParams.year;
    season = $routeParams.season;
  }

  $scope.changeSeason(year, season);
}).controller("seasonController", function($scope) {

  var arr = [
    {
      name: "2014年 冬",
      link: "#/2014/winter/"
    },
    {
      name: "2014年 春",
      link: "#/2014/spring/"
    },
    {
      name: "2014年 夏",
      link: "#/2014/summer/"
    },
    {
      name: "2014年 秋",
      link: "#/2014/autumn/"
    },
    {
      name: "2013年 冬",
      link: "#/2013/winter/"
    },
    {
      name: "2013年 春",
      link: "#/2013/spring/"
    },
    {
      name: "2013年 夏",
      link: "#/2013/summer/"
    },
    {
      name: "2013年 秋",
      link: "#/2013/autumn/"
    }
  ];

  $scope.seasons = arr;
});
