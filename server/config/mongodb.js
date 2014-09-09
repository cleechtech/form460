var mongojs = require('mongojs');
var connectionString = 'mongodb://localhost/form460'
var collections = ['scheduleE'];

// mongodb://localhost/form460

var db = mongojs(connectionString, collections);

module.exports = db;