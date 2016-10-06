(function() {
	'use strict';

	angular.module('app').controller('HomeController', HomeController );

	HomeController.$inject = [
		'$scope', '$routeParams' , '$timeout' , 'config' , 'APP_TEXT' , 'spinFactory' , '$log' , '$uibModal' , '$http'
	];

	function HomeController(
		$scope, $routeParams , $timeout ,  config , APP_TEXT , spinFactory , $log , $uibModal , $http
	) {
		
		var vm = this;		



		function init() {

			vm.constants = APP_TEXT ;

			// set URL configuration
			config.importHelpers(vm);

			//set default rating values for the rating example
			$scope.rating1 = 3;
		    $scope.rating2 = 2;
		    $scope.rating3 = 4;		    

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
