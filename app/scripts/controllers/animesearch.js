'use strict';

angular.module('animeLineupApp')
  .controller('AnimeSearchCtrl', function($scope, $http) {
  $http.get('api/animes').success(function(data) {
    $scope.animes = data;
  });
});
