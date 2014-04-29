'use strict';

angular.module('animeLineupApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'duScroll'
]).config(function ($routeProvider, $locationProvider, $httpProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://www.facebook.com/**',
    'https://www.facebook.com/**'
  ]);

  $routeProvider.when('/', {
    controller: 'AnimeListCtrl',
    templateUrl: '/partials/anime_list'
  }).when('/_=_', {
    // passportを使ったFacebook認証の場合#_=_にリダイレクトされてしまうため、以下のように正しいパスに誘導する
    redirectTo: '/'
  }).when('/help', {
    controller: 'HelpCtrl',
    templateUrl: '/partials/help'
  }).when('/login', {
    controller: 'LoginCtrl',
    templateUrl: '/partials/login'
  }).when('/register_anime', {
    controller: 'RegisterAnimeCtrl',
    templateUrl: '/partials/register_anime'
  }).when('/register_anime/:year/:season/:success', {
    controller: 'RegisterAnimeCtrl',
    templateUrl: '/partials/register_anime'
  }).when('/:year/:season', {
    controller: 'AnimeListCtrl',
    templateUrl: '/partials/anime_list'
  }).when('/season_calendar', {
    controller: 'SeasonCtrl',
    templateUrl: '/partials/season_list'
  });

  $locationProvider.html5Mode(true);

  // Intercept 401s and redirect you to login
  $httpProvider.interceptors.push(['$q', '$location', function ($q, $location) {
    return {
      'responseError': function (response) {
        if (response.status === 401) {
          $location.path('/login');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }]);
}).run(function ($rootScope, $location, Auth) {
  $rootScope.season = {};

  // Redirect to login if route requires auth and you're not logged in
  $rootScope.$on('$routeChangeStart', function (event, next) {
    if (next.authenticate && !Auth.isLoggedIn()) {
      $location.path('/login');
    }
  });
});
