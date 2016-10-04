(function() {
	'use strict';

	angular.module('app').controller('ModalController', function ($uibModal, $log) {
	  var $ctrl = this;
	  $ctrl.items = ['item1', 'item2', 'item3'];

	  $ctrl.animationsEnabled = true;

	  $ctrl.open = function (size) {
	    var modalInstance = $uibModal.open({
	      animation: $ctrl.animationsEnabled,
	      ariaLabelledBy: 'modal-title',
	      ariaDescribedBy: 'modal-body',
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      controllerAs: '$ctrl',
	      size: size,
	      resolve: {
	        items: function () {
	          return $ctrl.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $ctrl.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	  };

	  $ctrl.openComponentModal = function () {
	    var modalInstance = $uibModal.open({
	      animation: $ctrl.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      component: 'modalComponent',
	      resolve: {
	        items: function () {
	          return $ctrl.items;
	        }
	      }
	    });

	    modalInstance.result.then(function (selectedItem) {
	      $ctrl.selected = selectedItem;
	    }, function () {
	      $log.info('modal-component dismissed at: ' + new Date());
	    });
	  };

	  $ctrl.toggleAnimation = function () {
	    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
	  };
	});

	// Please note that $uibModalInstance represents a modal window (instance) dependency.
	// It is not the same as the $uibModal service used above.

	angular.module('app').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
	  var $ctrl = this;
	  $ctrl.items = items;
	  $ctrl.selected = {
	    item: $ctrl.items[0]
	  };

	  $ctrl.ok = function () {
	    $uibModalInstance.close($ctrl.selected.item);
	  };

	  $ctrl.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	});

}());
