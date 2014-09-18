var fs = require('fs'),
	_ = require('lodash'),
	low = require('lowdb');

var payments = low('../../data/Schedule_E_-_Payee_details.json').object;
var fileOutput = "../../data/Schedule_E_-_Payees_grouped.json";

payments = _.map(payments, function(payment){
	payment.name = payment.name.trim();
	return payment
});

// grouping
var result = _.groupBy(payments, "name");
result = JSON.stringify(result)

var fs = require('fs');
fs.writeFile(fileOutput, result, function(err) {
    if(err) {
        console.log(err);
    } else {
    	// pretty print JSON
    	low(fileOutput).save()
        console.log("The file was saved!");
    }
}); 