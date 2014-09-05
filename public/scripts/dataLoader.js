// var dfdE = $.Deferred();
// var dfdA = $.Deferred();
// var dfdT = $.Deferred();

d3.csv('/scheduleE', processData('01/01/14'), function(data){
	// dfdE.resolve(data);
	$('.spinner').fadeOut('slow');

	// var c = crossfilter(data)

	_

});

// load CSV files from the server
// d3.csv('/scheduleA', processData, function(data){
// 	dfdA.resolve(data);
// });

// d3.csv('/summaryTotals', function(data){
// 	dfdT.resolve(data);
// });

// all data loaded
// $.when.apply(null, [dfdA, dfdE, dfdT]).done(function(allData){
// 	console.log(allData);
// });

// get only 2014 contributions
function processData(startDate){
	var sd = new Date(startDate)
	return function(line){
		var reportDate = new Date(line.Rpt_Date);
		if(reportDate < sd) return;
		return line;
	}
}