'use strict';

describe('Service: AnimesValue', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var animes;
  beforeEach(inject(function (_AnimesValue_) {
    animes = _animes_;
  }));

  it('should do something', function () {
    expect(!!animes).toBe(true);
  });

});
