'use strict';

angular.module('animeLineupApp').controller('AnimeSearchCtrl', function($scope, AnimeSearchService, NavigationService) {
  $scope.searchByTitle = function(title){
    if(title === undefined || title === ''){
      AnimeSearchService.searchByDefault();
      NavigationService.seasonMode();
      return;
    }

    AnimeSearchService.searchByTitle(title);
    NavigationService.searchMode(title);
  };
});
