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
    return "http://capture.heartrails.com/200x300/delay=" + this.thumbnailDelay + "?" + this.url;
  },
  getEncodedURL: function() {
    return encodeURIComponent(this.url);
  },
  getHatebuURL: function() {
    return "http://b.hatena.ne.jp/entry/" + this.url;
  }
}

angular.module("mainModule", []).controller("simpleController", function($scope, $sce) {
  //オブジェクト作成
  var arr = [];
  arr.push(object(Anime, {
    title: "咲-Saki- 全国編",
    url: "http://www.saki-anime.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "中二病でも恋がしたい！戀",
    url: "http://www.anime-chu-2.com/",
    thumbnailDelay: 1
  }));
  arr.push(object(Anime, {
    title: "のうりん",
    url: "http://www.no-rin.tv/",
    thumbnailDelay: 2
  }));
  arr.push(object(Anime, {
    title: "いなり、こんこん、恋いろは。",
    url: "http://inarikonkon.jp/",
    thumbnailDelay: 0
  }));

  $scope.animes = arr;
});