
var dfdT = $.Deferred();

d3.csv('/summaryTotals', function(data){
	dfdT.resolve(data);

});


dfdT.done(function(data){
	console.log('data ' + data)
})