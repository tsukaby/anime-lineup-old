'use strict';

angular.module('animeLineupApp')
  .controller('SeasonCtrl', function($scope, seasonFactory) {
  $scope.seasons = seasonFactory.getSeasons();
});
