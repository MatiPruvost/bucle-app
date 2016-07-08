'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
  .module('core')
  .controller('HomeController', [
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
