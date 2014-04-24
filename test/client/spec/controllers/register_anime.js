'use strict';

describe('Controller: RegisterAnimeCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var RegisterAnimeCtrl;
  var scope;
  var routeParams;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $routeParams) {
    scope = $rootScope.$new();
    routeParams = $routeParams;
    RegisterAnimeCtrl = $controller('RegisterAnimeCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });
  }));

  it('routeParamにsuccessがない場合、アラートが存在しないこと', function () {
    routeParams.success = undefined;
    expect(scope.alert).toBeUndefined();
  });

  beforeEach(inject(function ($controller, $rootScope, $routeParams) {
    scope = $rootScope.$new();
    routeParams = $routeParams;
    routeParams.success = 'success';
    RegisterAnimeCtrl = $controller('RegisterAnimeCtrl', {
      $scope: scope,
      $routeParams: routeParams
    });
  }));

  it('routeParamにsuccessがある場合、アラートが1つ存在すること', function () {
    expect(scope.alerts.length).toBe(1);
  });
});
