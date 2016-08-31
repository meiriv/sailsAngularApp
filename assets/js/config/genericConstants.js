(function() {
	'use strict';

	angular.module('app')
	.constant('APP_EVENTS', {
        "CLICK": "click",
        "DESTROY": "$destroy",
        "GET_NOTIFICATION": "myNewNotification"
    })
    .constant('APP_TEXT', {
        "appName": "Sails Application from constants file",
        "Title": "Title"
    })
}());
