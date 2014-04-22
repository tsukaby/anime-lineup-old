'use strict';

var mongoose = require('mongoose'),
  Anime = mongoose.model('Anime'),
  Season = mongoose.model('Season'),
  User = mongoose.model('User');

//Clear old seasons, then add default seasons
Season.find({}).remove(function() {
  Season.create({
    year: "2014",
    season: "winter",
    name: "2014年 冬",
    link: "/2014/winter/"
  },
  {
    year: "2013",
    season: "winter",
    name: "2013年 冬",
    link: "/2013/winter/"
  },
  {
    year: "2013",
    season: "spring",
    name: "2013年 春",
    link: "/2013/spring/"
  },
  {
    year: "2013",
    season: "summer",
    name: "2013年 夏",
    link: "/2013/summer/"
  },
  {
    year: "2013",
    season: "autumn",
    name: "2013年 秋",
    link: "/2013/autumn/"
  }, function() {
      console.log('finished populating seasons');
    }
  );
});

//Clear old animes, then add default animes
Anime.find({}).remove(function() {
  Anime.create({
    title: "ベイビーステップ",
    url: "http://www9.nhk.or.jp/anime/babysteps/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "金色のコルダ Blue♪Sky",
    url: "http://www.ntv.co.jp/corda/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "僕らはみんな河合荘",
    url: "http://www.tbs.co.jp/anime/kawaisou/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "カードファイト!!ヴァンガード レギオンメイト編",
    url: "http://www.tv-tokyo.co.jp/anime/cf-vanguard-lm/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "遊☆戯☆王ARC-V",
    url: "http://www.tv-tokyo.co.jp/anime/yugioh-arcv/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "マジンボーン",
    url: "http://www.toei-anim.co.jp/tv/majinbone/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "FAIRY TAIL",
    url: "http://www.tv-tokyo.co.jp/anime/fairytail/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "龍ヶ嬢七々々の埋蔵金",
    url: "http://www.nanana.tv/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "ジョジョの奇妙な冒険 スターダストクルセイダース",
    url: "http://jojo-animation.com/",
    thumbnailDelay: 10,
    season: "spring",
    year: 2014
  },
  {
    title: "メカクシティアクターズ",
    url: "http://www.mekakucityactors.com/",
    thumbnailDelay: 8,
    season: "spring",
    year: 2014
  },
  {
    title: "極黒のブリュンヒルデ",
    url: "http://www.vap.co.jp/gokukoku/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "ディスク・ウォーズ：アベンジャーズ",
    url: "http://www.tv-tokyo.co.jp/anime/dw_avengers/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "マンガ家さんとアシスタントさんと",
    url: "http://mangakasan.tv/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "魔法科高校の劣等生",
    url: "http://mahouka.jp/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "魔法少女大戦",
    url: "http://mahoushoujyotaisen.com/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "彼女がフラグをおられたら",
    url: "http://www.gaworare-anime.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ケロロ",
    url: "http://www.sunrise-inc.co.jp/krr/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "健全ロボ ダイミダラー",
    url: "http://penguin-empire.com/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "風雲維新ダイショーグン",
    url: "http://daishogun-anime.jp/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "キャプテン・アース",
    url: "http://captain-earth.net/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "ノーゲーム・ノーライフ",
    url: "http://ngnl.jp/",
    thumbnailDelay: 2,
    season: "spring",
    year: 2014
  },
  {
    title: "神々の悪戯",
    url: "http://www.kamiaso-anime.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ブラック・ブレット",
    url: "http://www.black-bullet.net/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "デート・ア・ライブⅡ",
    url: "http://date-a-live-anime.com/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "シドニアの騎士",
    url: "http://www.knightsofsidonia.com/top.html",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "悪魔のリドル",
    url: "http://www.akuma-riddle.com/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "ご注文はうさぎですか？",
    url: "http://www.gochiusa.com/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "ハイキュー!!",
    url: "http://www.j-haikyu.com/anime/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "棺姫のチャイカ",
    url: "http://chaika-anime.jp/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ミュータントタートルズ",
    url: "http://www.tv-tokyo.co.jp/anime/tmnt/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "蟲師 続章",
    url: "http://www.mushishi-anime.com/",
    thumbnailDelay: 10,
    season: "spring",
    year: 2014
  },
  {
    title: "ラブライブ！ [2期]",
    url: "http://lovelive-anime.jp/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "頭文字D Final Stage",
    url: "http://www.animax.co.jp/special/initial-d/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ぷちます!! プチプチ・アイドルマスター",
    url: "http://puchimas.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ヒーローバンク",
    url: "http://herobank.sega.jp/anime/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ブレイドアンドソウル",
    url: "http://www.tbs.co.jp/anime/blade/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "ドラゴンボール改 [2期]",
    url: "http://www.toei-anim.co.jp/tv/dragon_kai/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "犬神さんと猫山さん",
    url: "http://www.dreamcreation.co.jp/inuneko/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "それでも世界は美しい",
    url: "http://www.ntv.co.jp/soreseka/",
    thumbnailDelay: 10,
    season: "spring",
    year: 2014
  },
  {
    title: "ソウルイーターノット！",
    url: "http://www.souleaternot.tv/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "エスカ＆ロジーのアトリエ ～黄昏の空の錬金術師～",
    url: "http://atelier-ps3.jp/escha-logy/anime/",
    thumbnailDelay: 3,
    season: "spring",
    year: 2014
  },
  {
    title: "ピンポン",
    url: "http://www.pingpong-anime.tv/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "selector infected WIXOSS",
    url: "http://selector-wixoss.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "金田一少年の事件簿R",
    url: "http://www.ytv.co.jp/kindaichi_r/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "星刻の竜騎士",
    url: "http://www.seikokutv.com/",
    thumbnailDelay: 5,
    season: "spring",
    year: 2014
  },
  {
    title: "一週間フレンズ。",
    url: "http://oneweekfriends.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "プリティーリズム・オールスターセレクション",
    url: "http://www.tv-tokyo.co.jp/anime/prettyrhythm/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "レディ ジュエルペット",
    url: "http://www.tv-tokyo.co.jp/anime/jewelpet6/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "テンカイナイト",
    url: "http://www.tv-tokyo.co.jp/anime/tenkaiknight/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "暴れん坊力士!!松太郎",
    url: "http://www.tv-asahi.co.jp/matsutaro/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "デュエル・マスターズ VS",
    url: "http://www.shopro.co.jp/tv/duelmastersvs/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "GO-GO たまごっち！",
    url: "http://www.tv-tokyo.co.jp/anime/tamagotchi/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "パックワールド",
    url: "http://pacworld.channel.or.jp/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "M3～ソノ黑キ鋼～",
    url: "http://www.m3-project.com/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "花物語",
    url: "http://www.monogatari-series.com/2ndseason/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2014
  },
  {
    title: "咲-Saki- 全国編",
    url: "http://www.saki-anime.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "中二病でも恋がしたい！戀",
    url: "http://www.anime-chu-2.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "のうりん",
    url: "http://www.no-rin.tv/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "いなり、こんこん、恋いろは。",
    url: "http://inarikonkon.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "そにアニ",
    url: "http://soniani.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "とある飛空士への恋歌",
    url: "http://koiuta.tv/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ディーふらぐ！",
    url: "http://www.d-fragments.net/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ハマトラ",
    url: "http://hamatorapj.com/animation.html",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "マケン姫っ！通",
    url: "http://maken-ki-two.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "未確認で進行形",
    url: "http://mikakunin.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "お姉ちゃんが来た",
    url: "http://www.takeshobo.co.jp/sp/tv_oneechan/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "銀の匙 Silver Spoon",
    url: "http://www.ginsaji-anime.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "桜Trick",
    url: "http://www.tbs.co.jp/anime/sakura/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "Wake Up Girls!",
    url: "http://wakeupgirls.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "生徒会役員共＊",
    url: "http://www.starchild.co.jp/special/seitokai2/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "最近、妹のようすがちょっとおかしいんだが。",
    url: "http://imocyo-anime.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ニセコイ",
    url: "http://www.nisekoi.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "世界征服～謀略のズヴィズダー～",
    url: "http://www.sekaiseifuku-zzz.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ウィッチクラフトワークス",
    url: "http://www.witch-cw-anime.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "スペースダンディ",
    url: "http://space-dandy.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノブナガン",
    url: "http://www.vap.co.jp/nobunagun/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノラガミ",
    url: "http://noragami-anime.net/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "バディ・コンプレックス",
    url: "http://buddy-complex.jp/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ウィザード・バリスターズ～弁魔士セシル",
    url: "http://wizardbarristers.com/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  {
    title: "ノブナガ・ザ・フール",
    url: "http://www.nobunaga.tv/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2014
  },
  
  
  {
    title: "未来日記リダイヤル",
    url: "http://www.future-diary.tv/info/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "最強銀河 究極ゼロ ～バトルスピリッツ～",
    url: "http://www.sunrise-inc.co.jp/battlespirits6/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "宮河家の空腹",
    url: "http://miyakawahungry.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "おしりかじり虫 第２シリーズ",
    url: "http://www9.nhk.or.jp/anime/oshiri/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ミス・モノクローム -The Animation-",
    url: "http://www.starchild.co.jp/special/miss_monochrome_anime/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "NARUTO-ナルト- SD ロック・リーの青春フルパワー忍伝 もういっちょ",
    url: "http://www.tv-tokyo.co.jp/anime/lee/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガイストクラッシャー",
    url: "http://gaist-anime.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "IS＜インフィニット・ストラトス＞2",
    url: "http://www.tbs.co.jp/anime/is2/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "凪のあすから",
    url: "http://www.nagiasu.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "アウトブレイク・カンパニー",
    url: "http://www.tbs.co.jp/anime/obc/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ゴールデンタイム",
    url: "http://golden-time.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "キルラキル KILL la KILL",
    url: "http://www.kill-la-kill.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "フリージング ヴァイブレーション[2期]",
    url: "http://freezing.tv/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "勇者になれなかった俺はしぶしぶ就職を決意しました。",
    url: "http://yu-sibu.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ストライク・ザ・ブラッド",
    url: "http://www.strike-the-blood.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ログ・ホライズン",
    url: "http://www9.nhk.or.jp/anime/loghorizon/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "はじめの一歩 Rising",
    url: "http://www.ntv.co.jp/ippo/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "てさぐれ！部活もの",
    url: "http://www.ntv.co.jp/tesabu/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "黒子のバスケ[2期]",
    url: "http://www.kurobas.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "声優戦隊ボイストーム7",
    url: "http://www.ntv.co.jp/voicetorm7/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "リトルバスターズ！～Refrain～",
    url: "http://www.litbus-anime.com/refrain/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "WHITE ALBUM2",
    url: "http://whitealbum2.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ファイ・ブレイン ～神のパズル 第3シリーズ",
    url: "http://https://www.nhk.or.jp/anime/phibrain/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ダイヤのA",
    url: "http://diaace.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ぎんぎつね",
    url: "http://gingitsune.net/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "世界でいちばん強くなりたい！",
    url: "http://www.sekatsuyo.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "夜桜四重奏 -ハナノウタ‐",
    url: "http://yozakura-anime.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "マギ[2期]",
    url: "http://www.project-magi.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ワルキューレ ロマンツェ",
    url: "http://walroma.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "メガネブ！",
    url: "http://mgnb.tv/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "てーきゅう[3期]",
    url: "http://te-kyu.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガンダムビルドファイターズ",
    url: "http://gundam-bf.net/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "弱虫ペダル",
    url: "http://yowapeda.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "のんのんびより",
    url: "http://www.nonnontv.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "蒼き鋼のアルペジオ－アルス・ノヴァ－",
    url: "http://www.aokihagane.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "機巧少女は傷つかない",
    url: "http://www.machine-doll.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "BLAZBLUE　AlterMemory",
    url: "http://blazblue-am.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "東京レイヴンズ",
    url: "http://www.tokyo-ravens.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "俺の脳内選択肢が、学園ラブコメを全力で邪魔している",
    url: "http://noucome.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "ガリレイドンナ",
    url: "http://www.galileidonna.tv/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "サムライフラメンコ",
    url: "http://www.samumenco.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "革命機ヴァルヴレイヴ 2nd SEASON",
    url: "http://www.valvrave.com/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  {
    title: "殺し屋さん",
    url: "http://www.5648.jp/",
    thumbnailDelay: 0,
    season: "autumn",
    year: 2013
  },
  
  
  {
    title: "俺の彼女と幼なじみが修羅場すぎる",
    url: "http://www.oreshura.net/",
    thumbnailDelay: 0,
    season: "winter",
    year: 2013
  },
  {
    title: "やはり俺の青春ラブコメはまちがっている。",
    url: "http://www.tbs.co.jp/anime/oregairu/",
    thumbnailDelay: 0,
    season: "spring",
    year: 2013
  },
  {
    title: "ダンガンロンパ",
    url: "http://www.geneonuniversal.jp/rondorobe/anime/danganronpa/",
    thumbnailDelay: 0,
    season: "summer",
    year: 2013
  }, function() {
      console.log('finished populating animes');
    }
  );
});

// Clear old users
User.find({}).remove(function() {
});
