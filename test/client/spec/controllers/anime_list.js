'use strict';

describe('Controller: AnimeListCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var AnimeListCtrl;
  var scope;
  var rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $rootScope;
    AnimeListCtrl = $controller('AnimeListCtrl', {
      $scope: scope
    });
  }));

  it('NavigationServiceが定義されていること', function () {
    expect(scope.NavigationService).toBeDefined();
  });

  beforeEach(inject(function ($controller, $rootScope, SeasonService) {
    scope = $rootScope.$new();

    spyOn(SeasonService, 'currentSeason').andReturn({year: 2010, season: 'winter'});

    AnimeListCtrl = $controller('AnimeListCtrl', {
      $scope: scope,
      SeasonService: SeasonService
    });
  }));

  it('前・次ページのリンクが設定されていること', function () {
    expect(scope.previousSeason).toBe('/2009/autumn');
    expect(scope.nextSeason).toBe('/2010/spring');
  });
});
