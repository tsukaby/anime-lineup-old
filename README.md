anime-lineup
============

日本のアニメのラインナップを紹介するWebアプリケーションです。
各シーズンごとのアニメの一覧をサムネイル付きで見ることができます。
また、アニメタイトルでの検索が可能です。

アニメが放映されたシーズンや、特定のシーズンにどんなアニメが放映されていたかを調べることができます。

## 開発環境

Yeomanにて以下のGeneratorを利用しています。
[generator-angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)

上記のマニュアルを参考に各Grunt Taskを実行することでアプリケーション実行などができます。

* AngularJS
* Twitter Bootstrap
* HTML5
* Sass, CSS3
* Node.js
* Express
* MongoDB
* Mongoose

## 開発環境の準備

1. アプリケーションのインストールと設定(MongoDB, Node.js + NPM, Grunt, Bower)
2. `git clone https://github.com/tsukaby/anime-lineup.git`
3. `cd anime-lineup`
4. `npm install`
5. `bower install`
6. (テストを実行する場合) `grunt`

## 実行
### 開発モード

```bash
grunt serve
```

### 本番モード

```bash
grunt serve:dist
```

## デプロイ

[ebコマンドを利用するためにAmazon Elastic Beanstalk Command Line Toolが必要です。](http://aws.amazon.com/code/6752709412171743)

製品コードを生成を生成し、Amazon Elastic Beanstalkにアップロードすることでデプロイされます。

1. `lib/config/env/production.js`を編集し、DB URIを設定
2. `grunt build`
3. `cd dist`
4. `git add .`
5. `git push.aws`
6. (Optional) `eb start`

