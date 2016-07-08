'use strict';

describe('Controller: PoemController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('poem'));

    var PoemController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PoemController = $controller('PoemController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
