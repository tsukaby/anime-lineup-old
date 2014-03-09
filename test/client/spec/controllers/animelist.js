'use strict';

describe('Controller: AnimeListCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var AnimeListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnimeListCtrl = $controller('AnimeListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
