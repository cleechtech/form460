var payments = require('./newArray');


var getAllPayees = function(payment){
	// var payees = _.groupBy(payment, 'payee');

	// return payees;
	console.log(payment);


	
	return payment;
}


payments.then(getAllPayees, function(err){
	console.log(err);
})

