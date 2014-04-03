'use strict';

angular.module('animeLineupApp').service('AnimeSearchService', function() {
  this.search = function(title) {
    console.log('hello' + title);
  };
});
