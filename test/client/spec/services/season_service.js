'use strict';

describe('Service: SeasonService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var SeasonService;
  beforeEach(inject(function (_SeasonService_) {
    SeasonService = _SeasonService_;

  }));

  it('nextSeason関数に各期を与えた場合、各期の次のシーズンが返ること', function () {
    expect(SeasonService.nextSeason(2010, 'winter')).toEqual({year: 2010, season: 'spring'});
    expect(SeasonService.nextSeason(2010, 'spring')).toEqual({year: 2010, season: 'summer'});
    expect(SeasonService.nextSeason(2010, 'summer')).toEqual({year: 2010, season: 'autumn'});
    expect(SeasonService.nextSeason(2010, 'autumn')).toEqual({year: 2011, season: 'winter'});
  });

  it('nextSeason関数の引数seasonがwinter,spring,summer,autumn以外の場合、undefinedが返ること', function () {
    expect(SeasonService.nextSeason(2010, 'Spring')).toBeUndefined();
    expect(SeasonService.nextSeason(2010, 'sprin')).toBeUndefined();
    expect(SeasonService.nextSeason(2010, '')).toBeUndefined();
    expect(SeasonService.nextSeason(2010, 2010)).toBeUndefined();
    expect(SeasonService.nextSeason(2010, null)).toBeUndefined();
    expect(SeasonService.nextSeason(2010)).toBeUndefined();
  });

  it('nextSeason関数の引数yearが数値に変換できないものの場合、undefinedが返ること', function () {
    expect(SeasonService.nextSeason('abc', 'spring')).toBeUndefined();
    expect(SeasonService.nextSeason('', 'spring')).toBeUndefined();
    expect(SeasonService.nextSeason(null, 'spring')).toBeUndefined();
    expect(SeasonService.nextSeason(undefined, 'spring')).toBeUndefined();
  });

  it('previousSeason関数に各期を与えた場合、各期の前のシーズンが返ること', function () {
    expect(SeasonService.previousSeason(2010, 'winter')).toEqual({year: 2009, season: 'autumn'});
    expect(SeasonService.previousSeason(2010, 'spring')).toEqual({year: 2010, season: 'winter'});
    expect(SeasonService.previousSeason(2010, 'summer')).toEqual({year: 2010, season: 'spring'});
    expect(SeasonService.previousSeason(2010, 'autumn')).toEqual({year: 2010, season: 'summer'});
  });

  it('previousSeason関数の引数seasonがwinter,spring,summer,autumn以外の場合、undefinedが返ること', function () {
    expect(SeasonService.previousSeason(2010, 'Spring')).toBeUndefined();
    expect(SeasonService.previousSeason(2010, 'sprin')).toBeUndefined();
    expect(SeasonService.previousSeason(2010, '')).toBeUndefined();
    expect(SeasonService.previousSeason(2010, 2010)).toBeUndefined();
    expect(SeasonService.previousSeason(2010, null)).toBeUndefined();
    expect(SeasonService.previousSeason(2010)).toBeUndefined();
  });

  it('previousSeason関数の引数yearが数値に変換できないものの場合、undefinedが返ること', function () {
    expect(SeasonService.previousSeason('abc', 'spring')).toBeUndefined();
    expect(SeasonService.previousSeason('', 'spring')).toBeUndefined();
    expect(SeasonService.previousSeason(null, 'spring')).toBeUndefined();
    expect(SeasonService.previousSeason(undefined, 'spring')).toBeUndefined();
  });

});
