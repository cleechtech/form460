'use strict';

var app = angular.module('form460', [
	'ui.router',
	'ui.slider',
	'smart-table'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('scheduleE', {
			url: '/scheduleE',
			templateUrl: 'views/scheduleE.html',
			controller: 'ScheduleECtrl'
		})
		// blahh..
		.state('ETable', {
			url: '/ETable/csv',
			templateUrl: 'views/ETable.html',
			controller: 'ETableCtrl'
		})

	$urlRouterProvider.otherwise('/')
})