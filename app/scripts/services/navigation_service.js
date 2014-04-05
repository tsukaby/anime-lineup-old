'use strict';

angular.module('animeLineupApp').service('NavigationService', function(SeasonService, SeasonConstant) {
  this.title = '';

  this.seasonMode = function(){
    this.title = 'シーズン：' + SeasonConstant.year + '年 ' + SeasonService.toJapaneseForSeason(SeasonConstant.season);
  };

  this.searchMode = function(searchWord){
    this.title = '検索：' + searchWord;
  };
});
