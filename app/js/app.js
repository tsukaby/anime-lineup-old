'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
            return $routeProvider.when("/", {
              controller: 'simpleController'
            }).when("/:year/:season", {
              controller: 'simpleController'
            });
          }]).run(function($route) {
});
;
