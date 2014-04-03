'use strict';

describe('Filter: SeasonColorFilter', function () {

  // load the filter's module
  beforeEach(module('animeLineupApp'));

  // initialize a new instance of the filter before each test
  var SeasonColorFilter;
  beforeEach(inject(function ($filter) {
    SeasonColorFilter = $filter('SeasonColorFilter');
  }));

  it('引数winterの場合、色コード#5141D9が返ること', function () {
    expect(SeasonColorFilter('winter')).toBe('#5141D9');
  });

  it('引数springの場合、色コード#B2F63Dが返ること', function () {
    expect(SeasonColorFilter('spring')).toBe('#B2F63D');
  });

  it('引数summerの場合、色コード#FF4540が返ること', function () {
    expect(SeasonColorFilter('summer')).toBe('#FF4540');
  });

  it('引数autumnの場合、色コード#FFAC40が返ること', function () {
    expect(SeasonColorFilter('autumn')).toBe('#FFAC40');
  });

  it('引数がwinter,spring,summer,autumn以外の場合、色コード#000000が返ること', function () {
    expect(SeasonColorFilter('Spring')).toBe('#000000');
    expect(SeasonColorFilter('sprin')).toBe('#000000');
    expect(SeasonColorFilter('')).toBe('#000000');
    expect(SeasonColorFilter(null)).toBe('#000000');
    expect(SeasonColorFilter()).toBe('#000000');
  });

});
