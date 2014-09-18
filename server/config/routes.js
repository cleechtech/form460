var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost/form460');
var scheduleE = db.collection('scheduleE');
var low = require('lowdb');
var _ = require('lodash');

module.exports = function(server){

	// Server Methods
	// ==============
	server.method('getAllPayeeNames', function(next){
		var db = low('./data/Schedule_E_-_Payees_grouped.json').object;
	    next(null, _.keys(db));
	}, { cache: { expiresIn: 99999 } });

	
	server.method('getPayee', function(payee, next){
		var db = low('./data/Schedule_E_-_Payees_grouped.json').object;
		
	    next(null, db[payee]);
	}, { cache: { expiresIn: 99999 } });


	// send all payee names
	server.route({
	    method: 'GET',
	    path: '/scheduleE/payees',
	    handler: function(req, reply){
	    	server.methods.getAllPayeeNames(function(err, result){
	    		reply(result);
	    	});  
	    }
	});

	// send all filer names
	server.route({
	    method: 'GET',
	    path: '/scheduleE/filerNames',
	    handler: function(req, res){
	        res.file('./data/Schedule_E_-_Filer_NamL.csv')
	    }
	});

	// send one payee
	server.route({
	    method: 'GET',
	    path: '/scheduleE/payees/{payee_namL}',
	    handler: function(req, reply){
	    	var payeeName = req.params.payee_namL;

	        server.methods.getPayee(payeeName, function(err, result){
	        	reply(result);
	        })
	    }
	});

	// send one filer (from MongoDB)
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

	// schedule A raw CSV file
	server.route({
	    method: 'GET',
	    path: '/scheduleA',
	    handler: function(req, res){
	    	res.file('./data/Form_460_-_Schedule_A_-_Monetary_Contributions.csv');
	    }
	});

	// schedule E raw CSV file
	server.route({
	    method: 'GET',
	    path: '/scheduleE/raw',
	    handler: function(req, res){
	        res.file('./data/Form_460_-_Schedule_E_-_Payments_Made.csv')
	    }
	});

	// ==============================
	// serve static application files
	server.route({
	    method: 'GET',
	    path: '/{path*}',
	    handler: {
	        directory: { path: './public', listing: false, index: true }
	    }
	});
}