'use strict';

describe('Controller: AnimelistCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var AnimelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimelistCtrl = $controller('AnimelistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
