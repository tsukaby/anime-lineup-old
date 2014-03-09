'use strict';

angular.module('animeLineupApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
]).config(function($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://www.facebook.com/**'
    ]);

    return $routeProvider.when('/', {
      controller: 'AnimeListCtrl',
      templateUrl: 'partials/anime_list.html'
    }).when('/:year/:season', {
      controller: 'AnimeListCtrl',
      templateUrl: 'partials/anime_list.html'
    }).when('/season_calendar', {
      controller: 'SeasonCtrl',
      templateUrl: 'partials/season_list.html'
    });
  }).run(function() {
});
