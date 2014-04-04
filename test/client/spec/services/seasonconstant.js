'use strict';

describe('Service: SeasonConstant', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SeasonConstant;
  beforeEach(inject(function (_SeasonConstant_) {
    SeasonConstant = _SeasonConstant_;
  }));

  it('SeasonConstantが定義されていること', function () {
    expect(!!SeasonConstant).toBe(true);
  });

  //SeasonConstantはconstantレシピであり、値を格納用途のため、これ以上のテストは省略

});
