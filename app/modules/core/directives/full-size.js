'use strict';

/**
 * @ngdoc directive
 * @name core.Directives.fullSize
 * @description fullSize directive
 */
angular
  .module('core')
  .directive('fullSize', [
    'ScreenService',
    function(ScreenService) {
      return {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
          var height = ScreenService.getSize().height;
          var width = ScreenService.getSize().width;
          iElm.css('height', height + 'px');
          iElm.css('width', width + 'px');
        }
      };
    }
  ]);
