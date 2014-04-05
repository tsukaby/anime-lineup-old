'use strict';

describe('Service: AnimesValue', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var AnimesValue;
  beforeEach(inject(function (_AnimesValue_) {
    AnimesValue = _AnimesValue_;
  }));

  it('AnimesValueが定義されていること', function () {
    expect(!!AnimesValue).toBe(true);
  });

  //AnimesValueはvalueレシピであり、値を格納用途のため、これ以上のテストは省略

});
