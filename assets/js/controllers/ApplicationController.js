(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController);

	ApplicationController.$inject = [
		'$scope', '$routeParams'
	];

	function ApplicationController(
		$scope, $routeParams
	) {
		
		$scope.appName = "Template Application";
	}
}());
