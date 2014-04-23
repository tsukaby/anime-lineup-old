'use strict';

angular.module('animeLineupApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, anime) {

  $scope.anime = anime;

  $scope.close = function () {
    $modalInstance.close();
  };
});
