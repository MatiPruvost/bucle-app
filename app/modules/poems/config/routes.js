'use strict';

/**
* @ngdoc object
* @name poems.config
* @requires ng.$stateProvider
* @description Defines the routes and other config within the poems module
*/
angular
    .module('poems')
    .config(['$stateProvider',
        function($stateProvider) {
            /**
             * @ngdoc event
             * @name poems.config.route
             * @eventOf poems.config
             * @description
             *
             * Define routes and the associated paths
             *
             * - When the state is `'poems'`, route to poems
             *
            */
            $stateProvider
                .state('poems', {
                    url: '/poems',
                    templateUrl: 'modules/poems/views/poems.html',
                    controller: 'PoemsController'
                });
        }
    ]);
