// filter summary contributions by amount
// =====================

var path = require('path'),
	amount = 1000,
	summaryUrl = path.join(__dirname, '../../data/Campaign_Finance_-_FPPC_Form_460_-_Summary_Totals.csv'),
	filterContributions = require(path.join(__dirname, '../readAndFilter.js'));

// check if contribution amount is greater than given value
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

filterContributions(summaryUrl, greaterThan(amount))
	.then(function(data){
		console.log(data)
	}, function(err){
		console.log('Uh oh: ' + err)
	})