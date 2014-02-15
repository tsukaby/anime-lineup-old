angular.module("mainModule", []).controller("simpleController", function($scope, $sce) {
  $scope.animes = [
    {
      title: "咲-Saki- 全国編",
      url: "http://www.saki-anime.com/",
      url_thumbnail: "http://capture.heartrails.com/200x300?http://www.saki-anime.com/",
      url_encoded: encodeURIComponent("http://www.saki-anime.com/"),
      url_hatebu: "http://b.hatena.ne.jp/entry/http://www.saki-anime.com/"
    },
    {
      title: "中二病でも恋がしたい！戀",
      url: "http://www.anime-chu-2.com/",
      url_thumbnail: "http://capture.heartrails.com/200x300/delay=1?http://www.anime-chu-2.com/",
      url_encoded: encodeURIComponent("http://www.anime-chu-2.com/"),
      url_hatebu: "http://b.hatena.ne.jp/entry/http://www.anime-chu-2.com/"
    },
    {
      title: "のうりん",
      url: "http://www.no-rin.tv/",
      url_thumbnail: "http://capture.heartrails.com/200x300/delay=2?http://www.no-rin.tv/",
      url_encoded: encodeURIComponent("http://www.no-rin.tv/"),
      url_hatebu: "http://b.hatena.ne.jp/entry/http://www.no-rin.tv/"
    },
    {
      title: "いなり、こんこん、恋いろは。",
      url: "http://inarikonkon.jp/",
      url_thumbnail: "http://capture.heartrails.com/200x300?http://inarikonkon.jp/",
      url_encoded: encodeURIComponent("http://inarikonkon.jp/"),
      url_hatebu: "http://b.hatena.ne.jp/entry/http://inarikonkon.jp/"
    }];
});