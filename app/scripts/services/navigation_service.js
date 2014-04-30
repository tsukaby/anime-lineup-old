'use strict';

angular.module('animeLineupApp').service('NavigationService', function ($rootScope, SeasonService) {
  this.title = '';

  /**
   * title変数に現在のシーズンを設定する。
   */
  this.seasonMode = function () {
    this.title = 'シーズン：' + $rootScope.season.year + '年 ' + SeasonService.toJapaneseForSeason($rootScope.season.season);
  };

  /**
   * title変数に検索ワードを設定する。
   *
   * @param searchWord 検索ワード
   */
  this.searchMode = function (searchWord) {
    this.title = '検索：' + searchWord;
  };
});
