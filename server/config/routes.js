var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/form460');
var scheduleE = db.collection('scheduleE');

module.exports = function(server){
	// schedule A file
	server.route({
	    method: 'GET',
	    path: '/scheduleA',
	    handler: function(req, res){

	    	// send the CSV file
	    	res.file('./data/Form_460_-_Schedule_A_-_Monetary_Contributions.csv');
	    }
	});

	// schedule E - send raw csv file
	server.route({
	    method: 'GET',
	    path: '/scheduleE/raw',
	    handler: function(req, res){
	        res.file('./data/Form_460_-_Schedule_E_-_Payments_Made.csv')
	    }
	});

	// ======================
	// schedule E - database
	// ======================
	server.route({
	    method: 'GET',
	    path: '/scheduleE/db/{filerName}',
	    handler: function(req, reply){
	    	// search by filer of the payments name (must be EXACT match)
	        scheduleE.find({ Filer_NamL: req.params.filerName }, function(err, docs){
	        	reply(docs)
	        })
	    }
	});

	// Summary Totals
	server.route({
	    method: 'GET',
	    path: '/summaryTotals',
	    handler: function(req, res){
	        res.file('./data/Form_460_-_Summary_Totals.csv')
	    }
	});

	// serve static files
	server.route({
	    method: 'GET',
	    path: '/{path*}',
	    handler: {
	        directory: { path: './public', listing: false, index: true }
	    }
	});
}