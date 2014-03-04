'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'ui.bootstrap'
]).config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.facebook.com/**'
    ]);

    return $routeProvider.when("/", {
      controller: 'animeListController',
      templateUrl: 'partials/anime_list.html'
    }).when("/:year/:season", {
      controller: 'animeListController',
      templateUrl: 'partials/anime_list.html'
    }).when("/season_calendar", {
      controller: 'seasonController',
      templateUrl: 'partials/season_list.html'
    });
  }]).run(function($route, seasonService) {
  // seasonServiceを始めに初期化するため、Inject
});
