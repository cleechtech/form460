'use strict';

var app = angular.module('form460', [
	'ui.router',
	'ui.slider',
	'smart-table'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('searchFiler', {
			url: '/',
			templateUrl: 'views/filerName.html',
			controller: 'FilerNameCtrl'
		})
		.state('ETable', {
			url: '/ETable/csv',
			templateUrl: 'views/ETable.html',
			controller: 'ETableCtrl'
		})

	$urlRouterProvider.otherwise('/')
})