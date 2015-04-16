/*!
 * Pandect
 * Copyright: 2015 Deepmind AS. http://www.deepmind.no/
 * License: MIT
 */

'use strict';

var angular = require('angular');

require('angular-material');
require('angular-animate');
require('angular-aria');
require('angular-material-icons');

require('./filters');
require('./services');
require('./directives');
require('./controllers');

(function () {

	// Create the app module and dependencies.
	var pandect = angular.module('pandect', [
		'ngMaterial',
		'ngMdIcons',
        'pandect.filters',
        'pandect.services',
        'pandect.directives',
        'pandect.controllers'
    ]);

	pandect.value('version', '0.0.1');
	pandect.value('author', 'Sondre Bjellås');
	pandect.value('HOST', 'http://localhost:3000');

	pandect.run(['$rootScope', '$http', 'HOST', 
		function ($rootScope, $http, HOST) {

		}]);

	pandect.config(['$mdThemingProvider',
		function ($mdThemingProvider)
		{
			 $mdThemingProvider.theme('cyan').primaryPalette('cyan');
			

    }]);

})();