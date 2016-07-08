'use strict';

//Setting up route
angular.module('poem').config(['$stateProvider',
	function($stateProvider) {
		// Poem state routing
		$stateProvider.
		state('poem', {
			url: '/poem/:chapter/:poem',
			templateUrl: 'modules/poem/views/poem.html',
      controller: 'PoemController'
		});
	}
]);
