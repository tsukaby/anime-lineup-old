'use strict';

angular.module('animeLineupApp').factory('Auth', function ($location, $rootScope, Session, $cookieStore) {

  // Get currentUser from cookie
  $rootScope.currentUser = $cookieStore.get('user') || null;
  $cookieStore.remove('user');

  return {

    logout: function (callback) {
      var cb = callback || angular.noop;

      return Session.delete(function () {
          $rootScope.currentUser = null;
          return cb();
        },
        function (err) {
          return cb(err);
        }).$promise;
    },

    isLoggedIn: function () {
      var user = $rootScope.currentUser;
      return !!user;
    }
  };
});