'use strict';

describe('Service: SearchWordService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SearchWordService;
  beforeEach(inject(function (_SearchWordService_) {
    SearchWordService = _SearchWordService_;
  }));

  it('should do something', function () {
    expect(!!SearchWordService).toBe(true);
  });

});
