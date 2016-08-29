(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController);

	ApplicationController.$inject = [
		'$scope', '$routeParams' , 'config'
	];

	function ApplicationController(
		$scope, $routeParams , config
	) {
		var vm = this;
		$scope.appName = "Template Application";

		// set URL configuration
		config.importHelpers(vm);
	}
}());
