'use strict';

describe('Controller: AnimeSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var AnimeSearchCtrl;
  var scope;
  var AnimeSearchService;
  var NavigationService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _AnimeSearchService_, _NavigationService_) {
    scope = $rootScope.$new();
    AnimeSearchService = _AnimeSearchService_;
    NavigationService = _NavigationService_;

    spyOn(AnimeSearchService, 'searchByTitle');
    spyOn(AnimeSearchService, 'searchByDefault');
    spyOn(NavigationService, 'seasonMode');
    spyOn(NavigationService, 'searchMode');

    AnimeSearchCtrl = $controller('AnimeSearchCtrl', {
      $scope: scope
    });
  }));

  it('引数titleがある場合、searchByTitle関数とsearchMode関数が利用されること', function () {
    scope.searchByTitle('test_title');
    expect(AnimeSearchService.searchByTitle).toHaveBeenCalledWith('test_title');
    expect(NavigationService.searchMode).toHaveBeenCalledWith('test_title');
  });

  it('引数titleがない場合、searchByDefault関数とseasonMode関数が利用されること', function () {
    scope.searchByTitle();
    expect(AnimeSearchService.searchByDefault).toHaveBeenCalled();
    expect(NavigationService.seasonMode).toHaveBeenCalled();
  });

  it('引数titleがnullの場合、searchByDefault関数とseasonMode関数が利用されること', function () {
    scope.searchByTitle(null);
    expect(AnimeSearchService.searchByDefault).toHaveBeenCalled();
    expect(NavigationService.seasonMode).toHaveBeenCalled();
  });

  it('引数titleが空文字列の場合、searchByDefault関数とseasonMode関数が利用されること', function () {
    scope.searchByTitle('');
    expect(AnimeSearchService.searchByDefault).toHaveBeenCalled();
    expect(NavigationService.seasonMode).toHaveBeenCalled();
  });

});
