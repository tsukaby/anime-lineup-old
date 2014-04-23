'use strict';

angular.module('animeLineupApp').service('NavigationService', function ($rootScope, SeasonService) {
  this.title = '';

  this.seasonMode = function () {
    this.title = 'シーズン：' + $rootScope.season.year + '年 ' + SeasonService.toJapaneseForSeason($rootScope.season.season);
  };

  this.searchMode = function (searchWord) {
    this.title = '検索：' + searchWord;
  };
});
