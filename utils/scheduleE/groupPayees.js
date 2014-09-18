var fs = require('fs'),
	_ = require('lodash'),
	low = require('lowdb');

var fileOutput = "../../data/Schedule_E_-_Payees_grouped.json";
var payments = low('../../data/Schedule_E_-_Payee_details.json').object;

var result = JSON.stringify(_.groupBy(payments, "name"))

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