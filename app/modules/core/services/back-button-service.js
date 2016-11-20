'use strict';

/**
 * @ngdoc service
 * @name core.Services.BackButtonService
 * @description BackButtonService Service
 */
angular
  .module('core')
  .service('BackButtonService', [
    '$location',
    '$rootScope',
    'Routes',
    function($location, $rootScope, Routes) {

      /**
      * @ngdoc function
      * @name core.Services.BackButtonService#handler
      * @methodOf core.Services.BackButtonService
      * @return {object}
      */
      var handler = function() {
        document.addEventListener("backbutton", backbuttonPressed, false);
      };

      var backbuttonPressed = function() {
        if ($location.path().indexOf(Routes.HOME) > 0) {
        }
        else if ($location.path().indexOf(Routes.POEMS) > 0) {
          $location.path(Routes.HOME);
        }
        else if ($location.path().indexOf(Routes.POEM) > 0) {
          $location.path(Routes.POEMS);
        }
        $rootScope.$apply();
      };

      return{
        handler: handler
      }

    }
  ]);
