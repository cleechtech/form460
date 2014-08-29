
var dfdE = $.Deferred();

d3.csv('/scheduleE', function(data){
	dfdE.resolve(data);

});