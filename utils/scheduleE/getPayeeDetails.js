// Write an array of payment objects (includes filer_ID and amount)
// ======================

var fs = require('fs'),
	_ = require('lodash'),
	path = require('path'),
	through = require('through'),
	csv = require('csv-parser');

var inputPath = path.normalize('../../data/Form_460_-_Schedule_E_-_Payments_Made.csv');
var outputPath = path.normalize('../../data/Schedule_E_-_Payee_details.json');
var allPayees = [];

fs.createReadStream(inputPath)
  .pipe(csv())
  .pipe(through(function(cont){
    
  	var payment = {
  		filer_ID: cont.Filer_ID,	// who filed recieving the payment
      lastname: cont.Payee_NamL,
      name: cont.Payee_NamF + ' ' + cont.Payee_NamL,
  		amount: cont.Amount,	// amount of payment
  		title: cont.Payee_NamT,
  		suffix: cont.Payee_NamS,
  		address1: cont.Payee_Adr1,
  		address2: cont.Payee_Adr2,
  		city: cont.Payee_City,
  		state: cont.Payee_State,
  		zip: cont.Payee_Zip4,
  	};
  	this.queue(payment);
  }))
  .pipe(through(function(payment){
  	allPayees.push(payment)
  }))
  .on('end', function(){
  	console.log('Writing payees to ' + outputPath);

  	var file = fs.createWriteStream(outputPath);
	file.on('error', function(err) { console.error('Something went terribly, terribly wrong'); });

	// write all payment objects as an array
	file.write('[');
	allPayees.forEach(function(payment){ 
		file.write(JSON.stringify(payment) + ',\n'); 
	});
	file.write(']');

	file.end();
  });