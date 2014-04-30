'use strict';

angular.module('animeLineupApp').controller('AnimeListCtrl', function ($scope, $rootScope, $http, $routeParams, SeasonService, $filter, $modal, AnimeSearchService, NavigationService, scroller) {
  $scope.isVisibleSearchBox = true;

  // 現在のシーズンを設定
  // TODO:不正なパラメータのエラー処理
  if (!$routeParams.year || !$routeParams.season) {
    //パラメタなしアクセスの場合は現在日付から現在シーズンを求める
    var current = SeasonService.currentSeason();
    $rootScope.season.year = current.year;
    $rootScope.season.season = current.season;
  } else {
    $rootScope.season.year = $routeParams.year;
    $rootScope.season.season = $routeParams.season;
  }

  //isLoadedによってローディング画像の表示を切り替える
  $scope.isLoaded = false;
  AnimeSearchService.searchBySeason($rootScope.season.year, $rootScope.season.season, function () {
    $scope.isLoaded = true;
  });

  //現在のシーズンを設定
  $scope.NavigationService = NavigationService;
  NavigationService.seasonMode();

  //前と次のシーズンのリンクを設定

  var previous = SeasonService.previousSeason($rootScope.season.year, $rootScope.season.season);
  var next = SeasonService.nextSeason($rootScope.season.year, $rootScope.season.season);
  $scope.previousSeason = '/' + previous.year + '/' + previous.season;
  $scope.nextSeason = '/' + next.year + '/' + next.season;

  /**
   * アニメリストをタイトルに従ってソートする。
   */
  $scope.sortTitle = function () {
    var desc = !!$scope.desc;
    $rootScope.animes = $filter('orderBy')($rootScope.animes, 'title', desc);
    $scope.desc = !desc;
  };

  /**
   * アニメリストを視聴状況に従ってソートする。
   */
  $scope.sortViewingHistories = function () {
    $rootScope.animes = $filter('viewingSortFilter')($rootScope.animes);
  };

  /**
   * スムーズに画面先頭へスクロールする。
   */
  $scope.resetScroll = function () {
    var x = 0;
    var y = 600;
    var duration = 2000; //milliseconds

    //Scroll to the exact position
    scroller.scrollTo(x, y, duration);

    var chunk = 0;
    scroller.scrollDelta(x, chunk, duration);

    var offset = 0;
    scroller.scrollToElement(document.getElementById('index_body'), offset, duration);
  };

  /**
   * 引数で指定したアニメの詳細画面を開く。
   *
   * @param anime 詳細を表示するアニメ
   */
  $scope.open = function (anime) {

    var modalInstance = $modal.open({
      templateUrl: '/partials/anime_detail.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        anime: function () {
          return anime;
        }
      }
    });

    modalInstance.result.then(function () {
    }, function () {
    });
  };

  /**
   * 視聴状況を登録する。
   *
   * @param anime 視聴状況を登録するアニメ
   * @param mode 視聴状況
   */
  $scope.view = function (anime, mode) {
    //パネルのスタイル変更
    anime.status = mode;

    //視聴状況の変更
    $http.post('/api/viewing_histories', {userId: $scope.currentUser.userId, year: anime.year, season: anime.season, title: anime.title, status: mode}).success(function (data) {
      console.log(data);
    });
  };

});
