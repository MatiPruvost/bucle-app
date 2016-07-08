'use strict';

describe('Controller: PoemsController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('poems'));

    var PoemsController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PoemsController = $controller('PoemsController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
