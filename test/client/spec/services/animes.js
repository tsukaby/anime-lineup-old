'use strict';

describe('Service: AnimesValue', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var AnimesValue;
  beforeEach(inject(function (_AnimesValue_) {
    AnimesValue = _AnimesValue_;
  }));

  it('should do something', function () {
    expect(!!AnimesValue).toBe(true);
  });

});
