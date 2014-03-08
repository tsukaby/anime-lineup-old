'use strict';

describe('Controller: ControllersCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var ControllersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControllersCtrl = $controller('ControllersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
