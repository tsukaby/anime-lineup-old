'use strict';

angular.module('animeLineupApp').controller('RegisterAnimeCtrl', function ($scope, $routeParams) {
  $scope.year = Number($routeParams.year);
  $scope.season = $routeParams.season;
  if($routeParams.success !== undefined){
    $scope.alerts = [
      { type: 'success', msg: '登録しました。' }
    ];
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});
