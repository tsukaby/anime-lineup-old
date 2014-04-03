'use strict';

describe('Service: AnimeSearchService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var AnimeSearchService;
  beforeEach(inject(function (_AnimeSearchService_) {
    AnimeSearchService = _AnimeSearchService_;
  }));

  it('should do something', function () {
    expect(!!AnimeSearchService).toBe(true);
  });

});
