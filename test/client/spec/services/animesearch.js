'use strict';

describe('Service: AnimeSearchService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var AnimeSearch;
  beforeEach(inject(function (_AnimeSearchService_) {
    AnimeSearch = _AnimeSearch_;
  }));

  it('should do something', function () {
    expect(!!AnimeSearch).toBe(true);
  });

});
