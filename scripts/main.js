

d3.csv('data/Campaign_Finance_-_FPPC_Form_460_-_Summary_Totals.csv', processData, function(data){
	$('.loader').fadeOut('slow');	
	$('canvas').fadeIn('slow');


	console.log(data)



});

// get only 2014 contributions
function processData(line){
	var startDate = new Date('01/01/14')
	var reportDate = new Date(line.Rpt_Date);

	if(reportDate < startDate) return;
	return line;
}