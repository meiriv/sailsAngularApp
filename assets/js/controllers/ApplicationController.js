(function() {
	'use strict';

	angular.module('app').controller('ApplicationController', ApplicationController );

	ApplicationController.$inject = [
		'$scope', '$rootScope' , '$routeParams' , '$location' , 'config' , 'APP_TEXT' , 'spinFactory' , '$mdSidenav'
	];

	function ApplicationController(
		$scope, $rootScope , $routeParams , $location , config , APP_TEXT , spinFactory , $mdSidenav
	) {
		var vm = this;
		$scope.constants = APP_TEXT ;
		$rootScope.location = $location;

		//Left Navigation is expanded by default
		$scope.navStatusExpanded = true ;

		// set URL configuration
		config.importHelpers(vm);

		//stop spinner after page is loaded, for some reason it is activated after the view is rendered
		 $scope.$on('$viewContentLoaded', function(){
		    spinFactory.stop();
		  });

	    $scope.expandCollapseNav =  function () 
	    {
	    	  if ($scope.navStatusExpanded) 
	    	  	{
	    	  		$scope.navStatusExpanded = false ;
	    	  		$scope.navWidthStyle={'width': '35px'};
	    	  		$scope.mainWidthStyle={'width': '97%'};

	    	  	}
	    	  	else 
	    	  	{
	    	  		$scope.navStatusExpanded = true;
	    	  		$scope.navWidthStyle={'width': '250px'};
	    	  		$scope.mainWidthStyle={'width': '70%'};
	    	  	};
	    }

	    //left navigation collapse settings
	    $scope.isNavCollapsed = true;
		$scope.isCollapsed = false;
		$scope.isCollapsedHorizontal = false;
	}
}());
