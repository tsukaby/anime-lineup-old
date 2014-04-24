'use strict';

angular.module('animeLineupApp').controller('SeasonCtrl', function ($scope, SeasonService) {
  $scope.seasons = SeasonService.getSeasons();
});
