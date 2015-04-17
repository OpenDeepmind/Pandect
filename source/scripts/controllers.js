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
		
		controllers.controller('WidgetsController', ['$scope', '$rootScope',
			function ($scope, $rootScope) {
		
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
		
				$scope.widgets = [{
					
					ui: {
					'span': 2,
					'col': 2	
					},
					
					
					'title': 'Hello World!'
				},
				{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				},{
					
					ui: {
					'span': 1,
					'col': 1	
					},
					
					
					'title': 'Hello World!'
				}]
		
		}]);
		

})();