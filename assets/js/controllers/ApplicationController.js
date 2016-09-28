(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController );

	ApplicationController.$inject = [
		'$scope', '$rootScope' , '$routeParams' , '$location' , 'config' , 'APP_TEXT' , 'spinFactory'
	];

	function ApplicationController(
		$scope, $rootScope , $routeParams , $location , config , APP_TEXT , spinFactory
	) {
		var vm = this;
		$scope.constants = APP_TEXT ;
		$rootScope.location = $location;

		// set URL configuration
		config.importHelpers(vm);

		//stop spinner after page is loaded, for some reason it is activated after the view is rendered
		 $scope.$on('$viewContentLoaded', function(){
		    spinFactory.stop();
		  });
	}
}());
