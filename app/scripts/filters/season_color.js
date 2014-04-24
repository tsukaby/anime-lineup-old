'use strict';

angular.module('animeLineupApp').filter('seasonColorFilter', function () {
  return function (input) {
    if (input === 'winter') {
      return '#5141D9';
    } else if (input === 'spring') {
      return '#B2F63D';
    } else if (input === 'summer') {
      return '#FF4540';
    } else if (input === 'autumn') {
      return '#FFAC40';
    } else {
      return '#000000';
    }
  };
});

