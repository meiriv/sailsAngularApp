(function() {
	'use strict';

	angular.module('app').controller('HomeController', HomeController );

	HomeController.$inject = [
		'$scope', '$routeParams' , '$timeout' , 'config' , 'APP_TEXT' , 'spinFactory'
	];

	function HomeController(
		$scope, $routeParams , $timeout ,  config , APP_TEXT , spinFactory
	) {
		
		var vm = this;
		

		function init() {

			vm.constants = APP_TEXT ;

			// set URL configuration
			config.importHelpers(vm);
			spinFactory.stop();
		}

		$scope.startSpin = function(){
			spinFactory.start();
		}

		$scope.stopSpin = function(){
			spinFactory.stop();
		}

		init();
		
	}
}());
