'use strict';

angular.module('animeLineupApp').controller('AnimeSearchCtrl', function ($scope, $rootScope, AnimeSearchService, NavigationService, Auth, $location) {

  /**
   * タイトルによるアニメ検索。
   *
   * @param title 検索するタイトル
   */
  $scope.searchByTitle = function (title) {
    if (!title) {
      AnimeSearchService.searchByDefault();
      NavigationService.seasonMode();
      return;
    }

    AnimeSearchService.searchByTitle(title);
    NavigationService.searchMode(title);
  };

  /**
   * #search_boxのフォーカスを外す。Enterが押されたときなどにフォーカスを外すためのもの
   */
  $scope.blurSearchBox = function () {
    angular.element('#search_box').blur();
  };

  /**
   * ログアウトする。
   */
  $scope.logout = function () {
    for (var i = 0; i < $rootScope.animes.length; i++) {
      delete $rootScope.animes[i].status;
    }

    Auth.logout().then(function () {
      $location.path('/');
    });
  };

  /**
   * 引数で指定したパスと現在のパスが同じかを判定する。
   *
   * @param route パス
   * @returns {boolean} trueの場合、同じパス
   */
  $scope.isActive = function (route) {
    return route === $location.path();
  };
});
