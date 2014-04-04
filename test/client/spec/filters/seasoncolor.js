'use strict';

describe('Filter: seasonColorFilter', function () {

  // load the filter's module
  beforeEach(module('animeLineupApp'));

  // initialize a new instance of the filter before each test
  var seasonColorFilter;
  beforeEach(inject(function ($filter) {
    seasonColorFilter = $filter('seasonColorFilter');
  }));

  it('引数winterの場合、色コード#5141D9が返ること', function () {
    expect(seasonColorFilter('winter')).toBe('#5141D9');
  });

  it('引数springの場合、色コード#B2F63Dが返ること', function () {
    expect(seasonColorFilter('spring')).toBe('#B2F63D');
  });

  it('引数summerの場合、色コード#FF4540が返ること', function () {
    expect(seasonColorFilter('summer')).toBe('#FF4540');
  });

  it('引数autumnの場合、色コード#FFAC40が返ること', function () {
    expect(seasonColorFilter('autumn')).toBe('#FFAC40');
  });

  it('引数がwinter,spring,summer,autumn以外の場合、色コード#000000が返ること', function () {
    expect(seasonColorFilter('Spring')).toBe('#000000');
    expect(seasonColorFilter('sprin')).toBe('#000000');
    expect(seasonColorFilter('')).toBe('#000000');
    expect(seasonColorFilter(null)).toBe('#000000');
    expect(seasonColorFilter()).toBe('#000000');
  });

});
