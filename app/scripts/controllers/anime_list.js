'use strict';

angular.module('animeLineupApp').controller('AnimeListCtrl', function($scope, $rootScope, $http, $routeParams, SeasonService, $filter, $modal, AnimesValue, AnimeSearchService, SeasonConstant, NavigationService, scroller) {
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
  $scope.previousSeason = '/' + previous.year + '/' + previous.season;
  $scope.nextSeason = '/' + next.year + '/' + next.season;

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

  $scope.view = function(anime, mode){
    //パネルのスタイル変更
    if(mode === 0){
      $rootScope.viewingHistories[anime.getTitle()] = {
          panelStyle: 'panel-gray',
          viewStatus: {
            done: 'active',
            none: '',
            now: ''
          }
        };
    }else if(mode === 1){
      $rootScope.viewingHistories[anime.getTitle()] = {
          panelStyle: 'panel-blue',
          viewStatus: {
            done: '',
            none: 'active',
            now: ''
          }
        };
    }else if(mode === 2){
      $rootScope.viewingHistories[anime.getTitle()] = {
          panelStyle: 'panel-green',
          viewStatus: {
            done: '',
            none: '',
            now: 'active'
          }
        };
    }

    //視聴状況の変更
    $http.post('/api/viewing_history', {userId: $scope.currentUser.userId, year: anime.year, season: anime.season, title: anime.title, status: mode}).success(function(data){
      console.log(data);
    });
  };

  if($scope.currentUser){
    // ログイン済みの場合のみ処理
    $http.get('/api/viewing_history/' + $scope.currentUser.userId + '/' + SeasonConstant.year + '/' + SeasonConstant.season).success(function(data){
      var panelStyles = [];
      var viewingStatuses = [];
      var viewingHistories = [];

      for(var i=0; i<data.length; i++){
        if(data[i].status === 0){
          viewingHistories[data[i].title] = {
            panelStyle: 'panel-gray',
            viewStatus: {
              done: 'active',
              none: '',
              now: ''
            }
          };

        }else if(data[i].status === 1){
          viewingHistories[data[i].title] = {
            panelStyle: 'panel-blue',
            viewStatus: {
              done: '',
              none: 'active',
              now: ''
            }
          };


        }else if(data[i].status === 2){
          viewingHistories[data[i].title] = {
            panelStyle: 'panel-green',
            viewStatus: {
              done: '',
              none: '',
              now: 'active'
            }
          };


        }
      }

      $rootScope.viewingHistories = viewingHistories;
    });

  }

});
