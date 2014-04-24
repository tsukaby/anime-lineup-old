'use strict';

describe('Service: NavigationService', function () {

  // load the service's module
  beforeEach(module('animeLineupApp'));

  // instantiate service
  var NavigationService;
  var scope;

  beforeEach(inject(function ($rootScope, _NavigationService_) {
    scope = $rootScope;
    NavigationService = _NavigationService_;
  }));

  it('searchModeによって、タイトルが設定されること', function () {
    NavigationService.searchMode('test_title');
    expect(NavigationService.title).toBe('検索：test_title');
  });

  it('seasonModeによって、タイトルが設定されること', function () {
    scope.season.year = 2010;
    scope.season.season = 'winter';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 冬');

    scope.season.year = 2010;
    scope.season.season = 'spring';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 春');

    scope.season.year = 2010;
    scope.season.season = 'summer';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 夏');

    scope.season.year = 2010;
    scope.season.season = 'autumn';
    NavigationService.seasonMode();
    expect(NavigationService.title).toEqual('シーズン：2010年 秋');
  });

});
