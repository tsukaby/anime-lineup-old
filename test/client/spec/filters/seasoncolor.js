'use strict';

describe('Filter: SeasonColorFilter', function () {

  // load the filter's module
  beforeEach(module('animeLineupApp'));

  // initialize a new instance of the filter before each test
  var SeasonColorFilter;
  beforeEach(inject(function ($filter) {
    SeasonColorFilter = $filter('SeasonColorFilter');
  }));

  it('should return the input prefixed with "SeasonColorFilter filter:"', function () {
    //var text = 'angularjs';
    //expect(new SeasonColorFilter(text)).toBe('SeasonColorFilter filter: ' + text);
  });

});
