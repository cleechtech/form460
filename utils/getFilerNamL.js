// get the name's of all contribution filers (Filer_NamL) and write them to a file
// ======================

var fs = require('fs'),
	_ = require('lodash'),
	path = require('path'),
	through = require('through'),
	csv = require('csv-parser');

var inputPath = path.normalize('../data/Form_460_-_Schedule_E_-_Payments_Made.csv');
var outputPath = path.normalize('../data/Schedule_E_-_Filer_NamL.csv');
var allNames = [];

fs.createReadStream(inputPath)
  .pipe(csv())
  .pipe(through(function(cont){
  	this.queue(cont.Filer_NamL);
  }))
  .pipe(through(function(name){
  	if(_.indexOf(allNames, name) === -1){
  		allNames.push(name)
  	}
  }))
  .on('end', function(){
  	console.log(allNames);
  	var file = fs.createWriteStream(outputPath);
	file.on('error', function(err) { /* error handling */ });
	allNames.forEach(function(name) { file.write(name + '\n'); });
	file.end();
  });
