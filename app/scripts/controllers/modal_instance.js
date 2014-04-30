'use strict';

angular.module('animeLineupApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, anime) {

  $scope.anime = anime;

  /**
   * ダイアログ画面を閉じる。
   */
  $scope.close = function () {
    $modalInstance.close();
  };
});
