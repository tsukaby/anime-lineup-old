'use strict';

/* Controllers */
var ModalInstanceCtrl = function($scope, $modalInstance, anime) {

  $scope.anime = anime;

  $scope.close = function() {
    $modalInstance.close();
  };
};