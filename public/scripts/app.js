'use strict';

var app = angular.module('form460', [
	'ui.router',
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