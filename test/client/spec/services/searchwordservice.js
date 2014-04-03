'use strict';

describe('Service: SearchWordService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SearchWordService;
  beforeEach(inject(function (_SearchWordService_) {
    SearchWordService = _SearchWordService_;
  }));

  it('SearchWordServiceが定義されていること', function () {
    expect(!!SearchWordService).toBe(true);
  });

  //SearchWordServiceはvalueレシピであり、値を格納用途のため、これ以上のテストは省略

});
