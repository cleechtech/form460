'use strict';

app.controller('ETableCtrl', function($scope){

	$scope.payments = []
	$scope.$watch('payments')

	// campaign contribution payments made in 2014
	d3.csv('/scheduleE/raw', processData('01/01/14'), function(payments){
		// gross..
		$('.spinner').fadeOut('slow');
		$scope.payments = payments;
		$scope.$apply()

		// http://stackoverflow.com/questions/16933711/how-to-load-csv-file-to-object-in-angualrjs
	})
});

// get only 2014 contributions
function processData(startDate){
	var sd = new Date(startDate)
	return function(line){
		var reportDate = new Date(line.Rpt_Date);
		if(reportDate < sd) return;
		return line;
	}
}