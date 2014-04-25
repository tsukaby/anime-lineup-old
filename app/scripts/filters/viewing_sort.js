'use strict';

//配列に格納されているオブジェクトのstatusフィールドに従ってソートする
angular.module('animeLineupApp').filter('viewingSortFilter', function () {
  return function (input) {

    if (!input) {
      //不正な入力値の場合、引数をそのまま返す
      return input;
    }

    input.sort(function (a, b) {
      if (a.status < b.status) {
        return 1;
      } else if (b.status < a.status) {
        return -1;
      } else {
        return 0;
      }

    });

    return input;

  };
});
