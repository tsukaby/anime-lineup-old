'use strict';

describe('Controller: AnimeSearchCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var AnimeSearchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimeSearchCtrl = $controller('AnimeSearchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
