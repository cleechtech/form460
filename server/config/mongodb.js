// express server example: 
// https://github.com/hobinjk/lets-all-go-to-the-lobby/blob/master/server.js

var MongoClient = require('mongodb').MongoClient;
var collections = ['scheduleE'];
var collectionData = {};

module.exports = function(){
	MongoClient.connect('mongodb://localhost/form460', function(err, db){
		if (err) throw err;

		console.log('Connected to database..')

		function collect(collectionName) {
			console.log('Getting array for ' + collectionName);
			db.collection(collectionName).find().toArray(function(err, array) {
				console.log('Got array for ' + collectionName);
				collectionData[collectionName] = array;
				console.log(collectionData)	// will output hella JSON
			});
	    }

	    collections.forEach(collect);
	});
};

// EXPRESS Routes
// collections.forEach(function(collectionName) {
//   app.get('/' + collectionName, function(req, res) {
//     res.send(JSON.stringify(collectionData[collectionName]));
//   });
// });
