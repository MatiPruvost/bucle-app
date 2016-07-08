'use strict';

/**
 * @ngdoc object
 * @name poems.Controllers.PoemsController
 * @description PoemsController
 * @requires ng.$scope
*/
angular
  .module('poems')
  .controller('PoemsController', [
    '$location',
    '$scope',
    'Poems',
    'Routes',
    function($location, $scope, Poems, Routes) {
      $scope.poems = Poems;

      $scope.go = function(chapter, poem) {
        $location.path(Routes.POEM + chapter + '/' + poem);
      };

      $scope.left = function() {
        $location.path(Routes.HOME);
      };

    }
]);
