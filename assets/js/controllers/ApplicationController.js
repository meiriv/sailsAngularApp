(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController );

	ApplicationController.$inject = [
		'$scope', '$rootScope' , '$routeParams' , '$location' , 'config' , 'APP_TEXT' 
	];

	function ApplicationController(
		$scope, $rootScope , $routeParams , $location , config , APP_TEXT
	) {
		var vm = this;
		$scope.constants = APP_TEXT ;
		$rootScope.location = $location;

		// set URL configuration
		config.importHelpers(vm);
	}
}());
