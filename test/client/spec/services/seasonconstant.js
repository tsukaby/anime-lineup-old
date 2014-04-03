'use strict';

describe('Service: SeasonConstant', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SeasonConstant;
  beforeEach(inject(function (_SeasonConstant_) {
    SeasonConstant = _SeasonConstant_;
  }));

  it('should do something', function () {
    expect(!!SeasonConstant).toBe(true);
  });

});
