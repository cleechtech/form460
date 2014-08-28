// read a CSV file and return promise resolved with 
// all entries callback returns true for
// =======================================

var fs = require('fs'),
	q = require('q'),
	csv = require('csv-parser');

module.exports = function(fileUrl, cbFilter){
	var conts = [],
		dfd = q.defer();

	// read csv file
	fs.createReadStream(fileUrl)
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