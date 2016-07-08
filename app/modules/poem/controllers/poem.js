'use strict';

/**
 * @ngdoc object
 * @name poem.Controllers.PoemController
 * @description PoemController
 * @requires ng.$scope
*/
angular
  .module('poem')
  .controller('PoemController', [
    '$anchorScroll',
    '$location',
    '$stateParams',
    '$scope',
    'Poems',
    'Routes',
    function($anchorScroll, $location, $stateParams, $scope, Poems, Routes) {

      // Set the offet equal to the header's height
      $anchorScroll.yOffset = 56;
      $scope.poems = Poems;

      var chapter = $stateParams.chapter;
      var poem = $stateParams.poem;

      $scope.go = function () {
        $location.path(Routes.POEMS);
      };

      // Scroll to a especific chapter o poem
      var goToPoem = function() {
        // Scroll to a poem
        if (poem > 0) {
          poem -= 1;
          $location.hash('chapter' + chapter + 'poem' + poem);
        }
        // Scroll to a chapter
        else {
          $location.hash('chapter' + chapter);
        }
      };

      goToPoem();

    }
]);
