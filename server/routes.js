// turn csv into json:
// https://github.com/mafintosh/csv-parser
var fs = require('fs'),
	q = require('q'),
	csv = require('csv-parser');

module.exports = function(server){
	// schedule A file
	server.route({
	    method: 'GET',
	    path: '/scheduleA',
	    handler: function(req, res){

	    	res.file('./data/Form_460_-_Schedule_A_-_Monetary_Contributions.csv');

	    	// too big... runs out of memory..
	    	// var dfd = q.defer();
	    	// var contributions = [];
	  //   	fs.createReadStream('./data/Form_460_-_Schedule_A_-_Monetary_Contributions.csv')
			//   .pipe(csv())
			//   .on('data', function(cont){
			//   	contributions.push(cont)
			//   })
			//   .on('error', function(err){
			//   	dfd.reject(err);
			//   })
			//   .on('end', function(){
			//   	dfd.resolve(contributions);
			//   })

			// dfd.promise.then(function(conts){
			// 	console.log('reply..')
			// 	res(conts)
			// })
	    }
	});

	// schedule E
	server.route({
	    method: 'GET',
	    path: '/scheduleE',
	    handler: function(req, res){
	        res.file('./data/Form_460_-_Schedule_E_-_Payments_Made.csv')
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