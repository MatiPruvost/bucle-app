'use strict';

/**
 * @ngdoc service
 * @name core.Services.LsService
 * @description LsService Service
 */
angular
  .module('core')
  .service('LsService', [

    function() {
      /**
      * @ngdoc function
      * @name core.Services.LsService#getScreen
      * @methodOf core.Services.LsService
      * @return {object} Returns a screen size
      */
      var getScreen = function() {
        var data = JSON.parse(localStorage.getItem("poems.screen"));
        if (data){
          return data;
        }
        else{
          return false;
        }
      };

      /**
      * @ngdoc function
      * @name core.Services.LsService#setScreen
      * @methodOf core.Services.LsService
      * @return {object} Returns the screen size
      */
      var setScreen = function(data) {
        localStorage.setItem("poems.screen", JSON.stringify(data));
        return data;
      };

      return{
        getScreen: getScreen,
        setScreen: setScreen
      }

    }
  ]);
