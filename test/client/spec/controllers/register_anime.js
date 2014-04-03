'use strict';

describe('Controller: RegisterAnimeCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var RegisterAnimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterAnimeCtrl = $controller('RegisterAnimeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
