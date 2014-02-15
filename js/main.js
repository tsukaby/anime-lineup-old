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
}

var app = angular.module("mainModule", []);
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'http://www.facebook.com/**'
  ])
}).controller("simpleController", function($scope) {
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
  arr.push(object(Anime, {
    title: "そにアニ",
    url: "http://soniani.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "とある飛空士への恋歌",
    url: "http://koiuta.tv/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ディーふらぐ！",
    url: "http://www.d-fragments.net/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ハマトラ",
    url: "http://hamatorapj.com/animation.html",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "マケン姫っ！通",
    url: "http://maken-ki-two.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "未確認で進行形",
    url: "http://mikakunin.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "お姉ちゃんが来た",
    url: "http://www.takeshobo.co.jp/sp/tv_oneechan/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "銀の匙 Silver Spoon",
    url: "http://www.ginsaji-anime.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "桜Trick",
    url: "http://www.tbs.co.jp/anime/sakura/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "Wake Up Girls!",
    url: "http://wakeupgirls.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "生徒会役員共＊",
    url: "http://www.starchild.co.jp/special/seitokai2/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "最近、妹のようすがちょっとおかしいんだが。",
    url: "http://imocyo-anime.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ニセコイ",
    url: "http://www.nisekoi.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "世界征服～謀略のズヴィズダー～",
    url: "http://www.sekaiseifuku-zzz.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ウィッチクラフトワークス",
    url: "http://www.witch-cw-anime.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "スペースダンディ",
    url: "http://space-dandy.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ノブナガン",
    url: "http://www.vap.co.jp/nobunagun/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ノラガミ",
    url: "http://noragami-anime.net/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "バディ・コンプレックス",
    url: "http://buddy-complex.jp/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ウィザード・バリスターズ～弁魔士セシル",
    url: "http://wizardbarristers.com/",
    thumbnailDelay: 0
  }));
  arr.push(object(Anime, {
    title: "ノブナガ・ザ・フール",
    url: "http://www.nobunaga.tv/",
    thumbnailDelay: 0
  }));

  $scope.animes = arr;
});

//Seasonクラス
var Season = {
  name: "冬",
  year: 2000,
  getFullName: function(){
    return this.year + "年 " + this.name;
  }
};

app.controller("seasonsController", function($scope) {
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