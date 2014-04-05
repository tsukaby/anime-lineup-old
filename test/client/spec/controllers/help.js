'use strict';

describe('Controller: HelpCtrl', function () {

  // load the controller's module
  beforeEach(module('animeLineupApp'));

  var HelpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelpCtrl = $controller('HelpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //現状ではHelpCtrlは処理が存在しないため、テストもなし
  });
});
