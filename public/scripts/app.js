'use strict';

var app = angular.module('form460', [
	'ui.router',
	'smart-table'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/ETable.html'
	})

	$urlRouterProvider.otherwise('/')
})

app.run(function(){
	d3.csv('/scheduleE', processData('01/01/14'), function(payments){

		// campaign contribution payments made in 2014
		console.log(payments)
	})
})