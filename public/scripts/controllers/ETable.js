'use strict';

app.controller('ETableCtrl', function($scope){

	$scope.payments = []
	$scope.$watch('payments')

	// campaign contribution payments made in 2014
	d3.csv('/scheduleE', processData('01/01/14'), function(payments){
		$scope.payments = payments;
		$scope.$apply()
	})
})