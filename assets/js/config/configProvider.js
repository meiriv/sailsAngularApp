(function() {

	angular.module('app').provider('config', configProvider);

	configProvider.$inject = ['urlConfig'];

	function configProvider(urlConfig) {
		var self = this;


		///
		// Provider Level
		///

		// First wave: Import essentials
		this.urls = urlConfig;

		// Helper functions
		this.templateUrl = function(name) {
			return self.urls.templates + name + '.html';
		};

		this.configUrl = function(name) {
			return self.urls.config + name + '.json';
		};

		this.dataUrl = function(name) {
			return self.urls.data + name + '.json';
		};

		///
		// Instance Level
		///

		this.$get = function($http, $q) {			

			// Add method to copy helper methods onto a given scope
			self.importHelpers = function(scope) {
				scope.templateUrl = self.templateUrl;
			};

			return self;
		};

		this.$get.$inject = [
			'$http',
			'$q'
		];

	}

}());