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
		
		controllers.controller('WidgetsController', ['$scope', '$rootScope', 'data',
			function ($scope, $rootScope, data) {
		
				$scope.resize = function (item)
				{ 
					console.log('resize', item);
					
					if (item.ui.span === 1)
					{
						item.ui.span = 2;
					item.ui.col = 2;
						
					}
					else
					{
						item.ui.span = 1;
					item.ui.col = 1;
						
					}
				}
				
				$scope.dashboard = data.getDashboards()[0];
				
				$scope.widgets = data.getDashboards()[0].items;
				
		}]);
})();