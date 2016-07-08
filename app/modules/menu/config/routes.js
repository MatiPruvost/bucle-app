'use strict';

//Setting up route
angular.module('menu').config(['$stateProvider',
	function($stateProvider) {
		// Menu state routing
		$stateProvider.
		state('menu', {
			url: '/menu',
			templateUrl: 'modules/menu/views/menu.html',
      controller: 'MenuController'
		});
	}
]);
