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

// write to a file
// http://stackoverflow.com/questions/2496710/writing-files-in-nodejs

// var fs = require('fs');
// fs.writeFile("/tmp/test", "Hey there!", function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("The file was saved!");
//     }
// }); 