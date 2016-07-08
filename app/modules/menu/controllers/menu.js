'use strict';

/**
 * @ngdoc object
 * @name menu.Controllers.MenuController
 * @description MenuController
 * @requires ng.$scope
*/
angular
  .module('menu')
  .controller('MenuController', [
    '$location',
    '$scope',
    'Routes',
    function($location, $scope, Routes) {

      $scope.routes = Routes;

      $scope.go = function(path) {
        $location.path(path);
      };

    }
]);
