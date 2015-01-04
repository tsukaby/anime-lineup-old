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

  beforeEach(inject(function ($controller, $rootScope, SeasonService) {
    scope = $rootScope.$new();

    spyOn(SeasonService, 'currentSeason').and.callFake({year: 2010, season: 'winter'});

    AnimeListCtrl = $controller('AnimeListCtrl', {
      $scope: scope,
      SeasonService: SeasonService
    });
  }));

});
