'use strict';

var app = angular.module('form460', [
	'ui.router',
	'ui.slider',
	'smart-table'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/ETable.html',
		controller: 'ETableCtrl'
	})

	$urlRouterProvider.otherwise('/')
})