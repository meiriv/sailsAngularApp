(function() {
	'use strict';

	angular.module('app').factory('navigator', navigator);

	navigator.$inject = [
		'$location'
	];

	function navigator($location) {
		var service = {
			navigateTo: navigateTo
		};

		return service;

		function navigateTo(path, queryParam1, etc) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			var search = $location.search();
			var queryParams = {};

			angular.forEach(args, function(arg) {
				if(_.isObject(arg)) {
					angular.forEach(arg, function(value, key) {
						queryParams[key] = value;
					});
					return;
				}

				if(_.isUndefined(search[arg])) {
					return;
				}
				queryParams[arg] = search[arg];
			});

			$location.url(buildUrl(path, queryParams));
		}

		function buildUrl(path, queryParams) {
			var url = '/' + path;
			var params = buildParamPairs(queryParams).join('&');
			if(params) {
				url += '?' + params;
			}

			return url;
		}

		function buildParamPairs(queryParams) {
			var params = [];
			angular.forEach(queryParams, function(value, key) {
				params.push(key + '=' + encodeURIComponent(value));
			});

			return params;
		}
	}
}());
