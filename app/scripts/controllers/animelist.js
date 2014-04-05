'use strict';

angular.module('animeLineupApp').controller('AnimeListCtrl', function($scope, $http, $routeParams, SeasonService, $filter, $modal, AnimesValue, AnimeSearchService, SeasonConstant, NavigationService, scroller) {
  $scope.AnimesValue = AnimesValue;

  // 現在のシーズンを設定
  // TODO:不正なパラメータのエラー処理
  if ($routeParams.year === undefined || $routeParams.season === undefined) {
    //パラメタなしアクセスの場合は現在日付から現在シーズンを求める
    var current = SeasonService.currentSeason();
    SeasonConstant.year = current.year;
    SeasonConstant.season = current.season;
  } else {
    SeasonConstant.year = $routeParams.year;
    SeasonConstant.season = $routeParams.season;
  }

  AnimeSearchService.searchBySeason(SeasonConstant.year, SeasonConstant.season);

  //現在のシーズンを設定
  $scope.NavigationService = NavigationService;
  NavigationService.seasonMode();

  //前と次のシーズンのリンクを設定

  var previous = SeasonService.previousSeason(SeasonConstant.year, SeasonConstant.season);
  var next = SeasonService.nextSeason(SeasonConstant.year, SeasonConstant.season);
  $scope.previousSeason = '#/' + previous.year + '/' + previous.season;
  $scope.nextSeason = '#/' + next.year + '/' + next.season;

  $scope.sortTitle = function() {
    var desc = !!$scope.desc;
    $scope.animes = $filter('orderBy')($scope.animes, 'title', desc);
    $scope.desc = !desc;
  };

  // 画面先頭にスクロールする
  $scope.resetScroll = function() {
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

  $scope.open = function(anime) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/anime_detail.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        anime: function() {
          return anime;
        }
      }
    });

    modalInstance.result.then(function() {
    }, function() {
    });
  };
});
