(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController );

	ApplicationController.$inject = [
		'$scope', '$routeParams' , 'config' , 'APP_TEXT' 
	];

	function ApplicationController(
		$scope, $routeParams , config , APP_TEXT
	) {
		var vm = this;
		$scope.constants = APP_TEXT ;

		// set URL configuration
		config.importHelpers(vm);
	}
}());
