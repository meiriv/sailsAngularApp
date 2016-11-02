(function() {

	angular.module('app').provider('config', configProvider);

	configProvider.$inject = ['urlConfig' , 'propertiesConfig'];

	function configProvider(urlConfig , propertiesConfig) {
		var self = this;
		//Load properties from application.properties file



		///
		// Provider Level
		///

		// First wave: Import essentials
		this.urls = urlConfig;
		this.properties = propertiesConfig;


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

		this.apiUrl = function(url) {
			if (self.properties.mockedData) {
				//build the json file name based on the api url, /user?id=2 will be converted to user.json assuming that a coresponding data file exist in data folder
				var urlArr = url.split("?");
				//remove slash
				var fileName = urlArr[0].replace("/", "");
				
				return self.urls.data + fileName + '.json';
			}
			else{
				return url;
			}
			
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
