/*!
 * Pandect
 * Copyright: 2015 Deepmind AS. http://www.deepmind.no/
 * License: MIT
 */

'use strict';

var angular = require('angular');

(function () {

	var services = angular.module('pandect.services', []);
	
	services.service('data', ['$rootScope', function ($rootScope) {
	
		var getDashboards = function () {
			
			var dashboards = [];
			
			var list = [];
			
			for (var i = 0; i < 10; i++) {
				list.push({

					ui: {
						'span': 2,
						'col': 2
					},

					'title': 'Hello World!'
				})
			}
			
			var dashboard = {
				'title': 'Pings',
				'icon': 'yellow',
				'columns': 6,
				'alerts': 4,
				'items': list
			};
			
			dashboards.push(dashboard);	
			
			return dashboards;		
		};
		
		return {
			
			getDashboards: getDashboards
			
		};
		
	}]);
	
})();