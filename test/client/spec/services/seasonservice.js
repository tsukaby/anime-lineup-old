'use strict';

describe('Service: SeasonService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SeasonService;
  beforeEach(inject(function (_SeasonService_) {
    SeasonService = _SeasonService_;
  }));

  it('should do something', function () {
    expect(!!SeasonService).toBe(true);
  });

});
