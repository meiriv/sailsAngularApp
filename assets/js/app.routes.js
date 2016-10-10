(function() {
	'use strict';

	angular.module('app').config(routeConfig);

	routeConfig.$inject = ['$routeProvider', 'configProvider'];

	function routeConfig($routeProvider, configProvider) {
		($routeProvider
		 	///
		 	// Home views
		 	///

			.when('/', {
				redirectTo: '/landing'
			})
			.when('/landing', {
				templateUrl: configProvider.templateUrl('home'),
				controller: 'HomeController as vm',
				reloadOnSearch: false
			})

			///
			// Detail views
			///

			.when('/page1', {
				templateUrl: configProvider.templateUrl('page1'),
				controller: 'HomeController as vm',
				reloadOnSearch: false
			})

			///
			// Workflow views
			///

			.when('/workflow', {
				templateUrl: configProvider.templateUrl('workflow'),
				controller: 'WorkflowController as vm'
			})

			///
			// Error handling
			///

			.otherwise({redirectTo: '/'})
		);
	}
}());