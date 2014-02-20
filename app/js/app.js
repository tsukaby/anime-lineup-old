'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
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
          }]).run(function($route) {
});
