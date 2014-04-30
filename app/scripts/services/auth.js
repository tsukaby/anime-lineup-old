'use strict';

angular.module('animeLineupApp').factory('Auth', function ($location, $rootScope, Session, $cookieStore) {

  // Get currentUser from cookie
  $rootScope.currentUser = $cookieStore.get('user') || null;
  $cookieStore.remove('user');

  return {

    /**
     * ログアウトする。
     *
     * @param callback
     * @returns {$promise|*|A.$promise}
     */
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

    /**
     * ログイン状態を取得する。
     *
     * @returns {boolean} trueの場合、ログインしている
     */
    isLoggedIn: function () {
      var user = $rootScope.currentUser;
      return !!user;
    }
  };
});