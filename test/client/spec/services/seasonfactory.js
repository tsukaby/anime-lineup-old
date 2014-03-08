'use strict';

describe('Service: seasonFactory', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var seasonFactory;
  beforeEach(inject(function (_seasonFactory_) {
    seasonFactory = _seasonFactory_;
  }));

  it('should do something', function () {
    expect(!!seasonFactory).toBe(true);
  });

});
