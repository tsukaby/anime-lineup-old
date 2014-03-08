'use strict';

angular.module('animeLineupApp')
  .controller('AnimeSearchCtrl', function($scope, $http) {
  $http.get('data/animes.json').success(function(data) {
    $scope.animes = data;
  });
});
