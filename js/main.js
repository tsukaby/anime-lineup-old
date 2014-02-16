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


angular.module("myApp", ['myApp.controllers', 'ngRoute']).config(function($routeProvider) {
  return $routeProvider.when("/", {
    controller: 'simpleController'
  }).when("/:year/:season", {
    controller: 'simpleController'
  });
}).run(function($route) {
});

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
    $scope.changeSeason($routeParams['year'], $routeParams['season']);
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