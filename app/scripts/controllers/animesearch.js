'use strict';

angular.module('animeLineupApp').controller('AnimeSearchCtrl', function($scope, AnimeSearchService, NavigationService) {
  //タイトルによるアニメ検索
  $scope.searchByTitle = function(title){
    if(title === undefined || title === null || title === ''){
      AnimeSearchService.searchByDefault();
      NavigationService.seasonMode();
      return;
    }

    AnimeSearchService.searchByTitle(title);
    NavigationService.searchMode(title);
  };

  //Enterが押されたときなどにフォーカスを外すためのもの
  $scope.blurSearchBox = function() {
    angular.element('#search_box').blur();
  };
});
