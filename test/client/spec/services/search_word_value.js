'use strict';

describe('Service: SearchWordValue', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SearchWordValue;
  beforeEach(inject(function (_SearchWordValue_) {
    SearchWordValue = _SearchWordValue_;
  }));

  it('SearchWordValueが定義されていること', function () {
    expect(!!SearchWordValue).toBe(true);
  });

  //SearchWordValueはvalueレシピであり、値を格納用途のため、これ以上のテストは省略

});
