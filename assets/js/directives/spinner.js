(function() {
	'use strict';

	angular.module('app').directive('spinner', spinner);

	spinner.$inject = [
		'$compile'
	];

	function spinner($compile) {
		var directive = {
			restrict: 'A',
			link: function(scope, element, attrs) {
				var el = $compile('<span us-spinner spinner-key="spinner-1"></span>')(scope);

				element.after(el);
				element.addClass('hidden');

				scope.$on('us-spinner:stop', function(event, key) {
					element.removeClass('hidden');
				});
			}
		};

		return directive;
	}

}());
