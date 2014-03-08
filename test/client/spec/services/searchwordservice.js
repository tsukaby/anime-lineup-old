'use strict';

describe('Service: searchWordService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var searchWordService;
  beforeEach(inject(function (_searchWordService_) {
    searchWordService = _searchWordService_;
  }));

  it('should do something', function () {
    expect(!!searchWordService).toBe(true);
  });

});
