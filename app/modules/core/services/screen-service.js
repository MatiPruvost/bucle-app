'use strict';

/**
 * @ngdoc service
 * @name core.Services.Screen
 * @description Screen Service
 */
angular
  .module('core')
  .service('ScreenService', [
    'LsService',
    function(LsService) {

      /**
       * @ngdoc function
       * @name core.Services.Screen#set
       * @methodOf core.Services.Screen
       * @return {boolean} Returns a boolean value
       */
      var getSize = function() {
        var data = LsService.getScreen();
        if (data) {
          return data;
        }
        else {
          return setSize();
        }
      };

      /**
       * @ngdoc function
       * @name core.Services.Screen#set
       * @methodOf core.Services.Screen
       * @return {boolean} Returns a boolean value
       */
      var setSize = function() {
        var screenSize = {
          height: window.innerHeight,
          width: window.innerWidth
        }
        return LsService.setScreen(screenSize);
      };

      return{
        getSize: getSize,
        setSize: setSize
      };

    }
  ]);
