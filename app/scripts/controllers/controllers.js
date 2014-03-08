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
  snsPoint: 0,
  getTitle: function() {
    return this.title;
  },
  getURL: function() {
    return this.url;
  },
  getThumbnailURL: function() {
    return "http://capture.heartrails.com/200x200/delay=" + this.thumbnailDelay + "?" + this.url;
  },
  getThumbnailURL2: function(sizeX, sizeY) {
    return "http://capture.heartrails.com/" + sizeX + "x" + sizeY + "/delay=" + this.thumbnailDelay + "?" + this.url;
  },
  getEncodedURL: function() {
    return encodeURIComponent(this.url);
  },
  getHatebuURL: function() {
    return "http://b.hatena.ne.jp/entry/" + this.url;
  },
  getFacebookButtonURL: function() {
    return "http://www.facebook.com/plugins/like.php?href=" + this.getURL() + "&width&layout=box_count&action=like&show_faces=false&share=false&height=65&appId=215921371931439";
  },
  getWikipediaURL: function() {
    return "http://ja.wikipedia.org/wiki/" + this.getTitle();
  },
  getSnsPoint: function() {
    return this.snsPoint;
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
angular.module("myApp.controllers", []).controller("animeListController", function($scope, $http, $routeParams, seasonService, $filter, $modal, $sce) {
  $scope.changeSeason = function(year, season) {
    
    //すべてのアニメの一覧から特定シーズンのものだけを抜き出して設定
    $http.get("data/animes.json", {cache: true}).success(function(data) {
      var arr = $filter("filter")(data, year);
      arr = $filter("filter")(arr, {season:season});
      
      var animes = [];
      for (var i = 0; i < arr.length; i++) {
        //オブジェクト作成
        var obj = object(Anime, arr[i]);
        //var tmp = "http://www.facebook.com/plugins/like.php?href=" + obj.getURL() + "&width&layout=box_count&action=like&show_faces=false&share=false&height=65&appId=215921371931439";
        //obj.fbURL = $sce.trustAsResourceUrl(tmp);
        animes.push(obj);
      }
      
      $scope.animes = animes;
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

  //現在のシーズンを設定
  $scope.currentSeason = year + "年 " + seasonService.toJapaneseForSeason(season);

  //前と次のシーズンのリンクを設定

  var previous = seasonService.previousSeason(year, season);
  var next = seasonService.nextSeason(year, season);
  $scope.previousSeason = "#/" + previous.year + "/" + previous.season;
  $scope.nextSeason = "#/" + next.year + "/" + next.season;

  //disabledクラス追加、リンクは空
  if (!seasonService.hasSeasons(previous)) {
    //
    $scope.previousSeason = "";
  }

  if (!seasonService.hasSeasons(next)) {
    //
    $scope.nextSeason = "";
  }

  $scope.sortTitle = function() {
    var desc = !!$scope.desc;
    $scope.animes = $filter('orderBy')($scope.animes, "title", desc);
    $scope.desc = !desc;
  };

  $scope.sortPoint = function() {
    var desc = !!$scope.desc;
    $scope.animes = $filter('orderBy')($scope.animes, "snsPoint", desc);
    $scope.desc = !desc;
  };

  $scope.open = function(anime) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/anime_detail.html',
      controller: ModalInstanceCtrl,
      resolve: {
        anime: function() {
          return anime;
        }
      }
    });

    modalInstance.result.then(function() {
    }, function() {
    });
  };




}).controller("seasonController", function($scope, seasonService) {
  $scope.seasons = seasonService.getSeasons();
}).controller("animeSearchController", function($scope, $http) {
  $http.get("data/animes.json").success(function(data) {
    $scope.animes = data;
  });
});

var ModalInstanceCtrl = function($scope, $modalInstance, anime) {

  $scope.anime = anime;

  $scope.close = function() {
    $modalInstance.close();
  };
};