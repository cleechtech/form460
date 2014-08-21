// contributions by time
// =====================

var fs = require('fs'),
	q = require('q'),
	csv = require('csv-parser');

// read contents of the main file. Accepts a function that takes a contribution object
// as the parameter. Will add that contribution to the array if cbFilter returns true
var readConts = function(cbFilter){
	var conts = [],
		dfd = q.defer();

	// read main file	
	fs.createReadStream('../data/Campaign_Finance_-_FPPC_Form_460_-_Summary_Totals.csv')
		.pipe(csv())
		.on('data', function(cont){
			if(cbFilter(cont))
				conts.push(cont);

		})
		.on('error', function(err){
			dfd.reject(err)
		})
		.on('end', function(){
			dfd.resolve(conts)
		});

	return dfd.promise;
};

// helper to check if contribution amount is greater than given value
var greaterThan = function(amount){
	return function(cont){
		var a = cont.Amount_A.substr(1)

		if (parseInt(a) > amount){
			return true;
		} else {
			return false;
		}
	}
};

// run run run
readConts(greaterThan(10000)).then(function(data){
	console.log(data)
}, function(err){
	console.log('Uh oh: ' + err)
})