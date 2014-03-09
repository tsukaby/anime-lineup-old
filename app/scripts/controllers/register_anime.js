'use strict';

angular.module('animeLineupApp').controller('RegisterAnimeCtrl', function ($scope, $routeParams) {
  $scope.year = Number($routeParams.year);
  $scope.season = $routeParams.season;
});
