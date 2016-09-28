(function() {
	'use strict';

	angular.module('app').factory('spinFactory', spinFactory);

	spinFactory.$inject = [
		'$rootScope', 'usSpinnerService'
	];

	function spinFactory($rootScope, usSpinnerService) {
		var service = {
			start: function() {
				usSpinnerService.spin('spinner-1');
			},

			stop: function() {
				usSpinnerService.stop('spinner-1');
			}
		};

		$rootScope.$on('$routeChangeStart', function() {
			service.start();
		});

		return service;
	}

}());
