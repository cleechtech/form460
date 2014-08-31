'use strict';

app.controller('ETableCtrl', function($scope){

	$scope.payments = []
	$scope.$watch('payments')

	// campaign contribution payments made in 2014
	d3.csv('/scheduleE', processData('01/01/14'), function(payments){
		$scope.payments = payments;
		$scope.$apply()

		// more angular-esque: http://stackoverflow.com/questions/16933711/how-to-load-csv-file-to-object-in-angualrjs
		// also, Papa Parse: http://papaparse.com/#remote-files
	})
})