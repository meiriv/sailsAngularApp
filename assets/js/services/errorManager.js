(function() {
	'use strict';


	///
	// Error Manager
	///

	angular.module('app').factory('errorManager', errorManager);

	errorManager.$inject = [
		'$rootScope', '$modal', 'config'
	];

	function errorManager($rootScope, $modal, config) {
		var helper = {};
		config.importHelpers(helper);

		var service = {
			show: function(message, title) {
				$modal.open({
					templateUrl: helper.templateUrl('errorModal'),
					backdrop: true,
					controller: 'ErrorController',
					resolve: {
						options: function() {
							return {
								message: message || 'An unknown error occurred.',
								title: title || 'Whoops! Something went wrong...'
							};
						}
					}
				});
			},

			init: function() {
				$rootScope.$on('httpError', function(evt, args) {
					service.show(args.error);
				});
			}
		};

		return service;
	}


	///
	// Error Controller
	///

	angular.module('app').controller(
		'ErrorController', errorController
	);

	errorController.$inject = ['$scope', 'options'];

	function errorController($scope, options) {
		$scope.options = options;
	}

}());
