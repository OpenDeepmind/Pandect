/*!
 * Pandect
 * Copyright: 2015 Deepmind AS. http://www.deepmind.no/
 * License: MIT
 */

'use strict';

var angular = require('angular');

(function () {

	var controllers = angular.module('pandect.controllers', []);

	controllers.controller('ActionsController', ['$scope', '$rootScope',
		function ($scope, $rootScope) {

			$scope.tags = ['production', 'ping'];

			$scope.title = 'Actions';

			$scope.tiles = [{'title': 'hello world', 'background': 'blue', 'span.row': '2', 'span.col': '2'}];
			
		}]);

})();