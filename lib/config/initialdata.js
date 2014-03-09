'use strict';

var mongoose = require('mongoose'),
  Anime = mongoose.model('Anime'),
  Season = mongoose.model('Season');

//Clear old seasons, then add default seasons
Season.find({}).remove(function() {
  Season.create({
    year: "2014",
    season: "winter",
    name: "2014年 冬",
    link: "#/2014/winter/"
  },
  {
    year: "2013",
    season: "winter",
    name: "2013年 冬",
    link: "#/2013/winter/"
  },
  {
    year: "2013",
    season: "spring",
    name: "2013年 春",
    link: "#/2013/spring/"
  },
  {
    year: "2013",
    season: "summer",
    name: "2013年 夏",
    link: "#/2013/summer/"
  },
  {
    year: "2013",
    season: "autumn",
    name: "2013年 秋",
    link: "#/2013/autumn/"
  }, function() {
      console.log('finished populating seasons');
    }
  );
});

//Clear old animes, then add default animes
Anime.find({}).remove(function() {
  Anime.create({
    title: "咲-Saki- 全国編",
    url: "http://www.saki-anime.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "中二病でも恋がしたい！戀",
    url: "http://www.anime-chu-2.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "のうりん",
    url: "http://www.no-rin.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "いなり、こんこん、恋いろは。",
    url: "http://inarikonkon.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "そにアニ",
    url: "http://soniani.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "とある飛空士への恋歌",
    url: "http://koiuta.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ディーふらぐ！",
    url: "http://www.d-fragments.net/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ハマトラ",
    url: "http://hamatorapj.com/animation.html",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "マケン姫っ！通",
    url: "http://maken-ki-two.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "未確認で進行形",
    url: "http://mikakunin.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "お姉ちゃんが来た",
    url: "http://www.takeshobo.co.jp/sp/tv_oneechan/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "銀の匙 Silver Spoon",
    url: "http://www.ginsaji-anime.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "桜Trick",
    url: "http://www.tbs.co.jp/anime/sakura/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "Wake Up Girls!",
    url: "http://wakeupgirls.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "生徒会役員共＊",
    url: "http://www.starchild.co.jp/special/seitokai2/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "最近、妹のようすがちょっとおかしいんだが。",
    url: "http://imocyo-anime.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ニセコイ",
    url: "http://www.nisekoi.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "世界征服～謀略のズヴィズダー～",
    url: "http://www.sekaiseifuku-zzz.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ウィッチクラフトワークス",
    url: "http://www.witch-cw-anime.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "スペースダンディ",
    url: "http://space-dandy.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノブナガン",
    url: "http://www.vap.co.jp/nobunagun/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノラガミ",
    url: "http://noragami-anime.net/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "バディ・コンプレックス",
    url: "http://buddy-complex.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ウィザード・バリスターズ～弁魔士セシル",
    url: "http://wizardbarristers.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノブナガ・ザ・フール",
    url: "http://www.nobunaga.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2014
  },
  
  
  {
    title: "未来日記リダイヤル",
    url: "http://www.future-diary.tv/info/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "最強銀河 究極ゼロ ～バトルスピリッツ～",
    url: "http://www.sunrise-inc.co.jp/battlespirits6/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "宮河家の空腹",
    url: "http://miyakawahungry.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "おしりかじり虫 第２シリーズ",
    url: "http://www9.nhk.or.jp/anime/oshiri/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ミス・モノクローム -The Animation-",
    url: "http://www.starchild.co.jp/special/miss_monochrome_anime/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "NARUTO-ナルト- SD ロック・リーの青春フルパワー忍伝 もういっちょ",
    url: "http://www.tv-tokyo.co.jp/anime/lee/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガイストクラッシャー",
    url: "http://gaist-anime.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "IS＜インフィニット・ストラトス＞2",
    url: "http://www.tbs.co.jp/anime/is2/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "凪のあすから",
    url: "http://www.nagiasu.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "アウトブレイク・カンパニー",
    url: "http://www.tbs.co.jp/anime/obc/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ゴールデンタイム",
    url: "http://golden-time.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "キルラキル KILL la KILL",
    url: "http://www.kill-la-kill.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "フリージング ヴァイブレーション[2期]",
    url: "http://freezing.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "勇者になれなかった俺はしぶしぶ就職を決意しました。",
    url: "http://yu-sibu.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ストライク・ザ・ブラッド",
    url: "http://www.strike-the-blood.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ログ・ホライズン",
    url: "http://www9.nhk.or.jp/anime/loghorizon/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "はじめの一歩 Rising",
    url: "http://www.ntv.co.jp/ippo/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "てさぐれ！部活もの",
    url: "http://www.ntv.co.jp/tesabu/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "黒子のバスケ[2期]",
    url: "http://www.kurobas.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "声優戦隊ボイストーム7",
    url: "http://www.ntv.co.jp/voicetorm7/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "リトルバスターズ！～Refrain～",
    url: "http://www.litbus-anime.com/refrain/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "WHITE ALBUM2",
    url: "http://whitealbum2.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ファイ・ブレイン ～神のパズル 第3シリーズ",
    url: "http://https://www.nhk.or.jp/anime/phibrain/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ダイヤのA",
    url: "http://diaace.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ぎんぎつね",
    url: "http://gingitsune.net/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "世界でいちばん強くなりたい！",
    url: "http://www.sekatsuyo.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "夜桜四重奏 -ハナノウタ‐",
    url: "http://yozakura-anime.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "マギ[2期]",
    url: "http://www.project-magi.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ワルキューレ ロマンツェ",
    url: "http://walroma.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "メガネブ！",
    url: "http://mgnb.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "てーきゅう[3期]",
    url: "http://te-kyu.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガンダムビルドファイターズ",
    url: "http://gundam-bf.net/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "弱虫ペダル",
    url: "http://yowapeda.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "のんのんびより",
    url: "http://www.nonnontv.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "蒼き鋼のアルペジオ－アルス・ノヴァ－",
    url: "http://www.aokihagane.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "機巧少女は傷つかない",
    url: "http://www.machine-doll.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "BLAZBLUE　AlterMemory",
    url: "http://blazblue-am.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "東京レイヴンズ",
    url: "http://www.tokyo-ravens.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "俺の脳内選択肢が、学園ラブコメを全力で邪魔している",
    url: "http://noucome.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガリレイドンナ",
    url: "http://www.galileidonna.tv/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "サムライフラメンコ",
    url: "http://www.samumenco.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "革命機ヴァルヴレイヴ 2nd SEASON",
    url: "http://www.valvrave.com/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "殺し屋さん",
    url: "http://www.5648.jp/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "autumn",
    year: 2013
  },
  
  
  {
    title: "俺の彼女と幼なじみが修羅場すぎる",
    url: "http://www.oreshura.net/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "winter",
    year: 2013
  },
  {
    title: "やはり俺の青春ラブコメはまちがっている。",
    url: "http://www.tbs.co.jp/anime/oregairu/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "spring",
    year: 2013
  },
  {
    title: "ダンガンロンパ",
    url: "http://www.geneonuniversal.jp/rondorobe/anime/danganronpa/",
    thumbnailDelay: 0,
    snsPoint: 0,
    season: "summer",
    year: 2013
  }, function() {
      console.log('finished populating animes');
    }
  );
});