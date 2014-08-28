// create smaller array of payment objects
// from Schedule E - Payments Made 
// ==================

var path = require('path'),
	_ = require('lodash'),
	q = require('q'),
	newFormat = [],
	scheduleE = path.join(__dirname, '../../data/Campaign_Finance_-_FPPC_Form_460_-_Schedule_E_-_Payments_Made.csv'),
	filterContributions = require(path.join(__dirname, '../readAndFilter.js'));

var dfd = q.defer();

filterContributions(scheduleE, function(payment){
	return true;
}).then(function(allPayments){
	var formattedPayments = _.map(allPayments, function(p){
		// new (smaller) payment obj
		var paymentObj = {
			filer_id: p.Filer_ID,
			tran_id: p.Tran_ID,
			filer: p.Filer_NamL,
			amount: parseInt(p.Amount.substr(1)),
			payee: p.Payee_NamL,
			expn_date: p.Expn_Date,
			cand_name: path.normalize(p.Cand_NamF + ' ' + p.Cand_NamL)
		};
		return paymentObj;
	});

	// new array of payments
	return formattedPayments;

}).then(function(formatted){
	// promise resolves with formatted array
	dfd.resolve(formatted);
}, function(err){
	console.log(err);
	dfd.reject(err);
})

module.exports = dfd.promise;