
var dfdA = $.Deferred();

d3.csv('/scheduleA', processData, function(data){
	dfdA.resolve(data);
});

dfdT.done(function(data){
	console.log('data ' + data)
})

// get only 2014 contributions
function processData(line){
	var startDate = new Date('01/01/14')
	var reportDate = new Date(line.Rpt_Date);

	if(reportDate < startDate) return;
	return line;
}