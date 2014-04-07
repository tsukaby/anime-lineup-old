'use strict';

angular.module('animeLineupApp').factory('Session', function ($resource) {
  return $resource('/api/session/');
});
