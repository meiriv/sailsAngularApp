(function() {
	'use strict';

	angular.module('app').controller('HomeController', HomeController );

	HomeController.$inject = [
		'$scope', '$routeParams' , 'config' , 'APP_TEXT' 
	];

	function HomeController(
		$scope, $routeParams , config , APP_TEXT
	) {
		var vm = this;
		$scope.constants = APP_TEXT ;

		// set URL configuration
		config.importHelpers(vm);
	}
}());
