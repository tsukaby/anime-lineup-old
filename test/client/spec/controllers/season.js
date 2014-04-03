'use strict';

describe('Controller: SeasonCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var SeasonCtrl;
  var scope;
  var SeasonService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _SeasonService_) {
    scope = $rootScope.$new();
    SeasonService = _SeasonService_;

    spyOn(SeasonService, 'getSeasons');

    SeasonCtrl = $controller('SeasonCtrl', {
      $scope: scope
    });

  }));

  it('getSeasonsが利用されること', function () {
    expect(SeasonService.getSeasons).toHaveBeenCalled();
  });
});
