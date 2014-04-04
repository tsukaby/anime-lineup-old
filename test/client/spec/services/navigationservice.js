'use strict';

describe('Service: NavigationService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var NavigationService;
  var SeasonConstant;

  beforeEach(inject(function (_NavigationService_, _SeasonConstant_) {
    NavigationService = _NavigationService_;
    SeasonConstant = _SeasonConstant_;
  }));

  it('searchModeによって、タイトルが設定されること', function () {
    NavigationService.searchMode('test_title');
    expect(NavigationService.title).toBe('検索：test_title');
  });

  it('seasonModeによって、タイトルが設定されること', function () {
    SeasonConstant.year = 2010;
    SeasonConstant.season = 'winter';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 冬');

    SeasonConstant.year = 2010;
    SeasonConstant.season = 'spring';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 春');

    SeasonConstant.year = 2010;
    SeasonConstant.season = 'summer';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 夏');

    SeasonConstant.year = 2010;
    SeasonConstant.season = 'autumn';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 秋');
  });

});
