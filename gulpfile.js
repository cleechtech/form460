// run `gulp` or `gulp bower-install` to inject
// script tags into index.html
// ============================

var gulp = require('gulp'),
	bowerFiles = require('main-bower-files'),
	inject = require("gulp-inject");

// inject bower packages into index.html
gulp.task('bower-install', function(){
  gulp.src('./index.html')
  	.pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  	.pipe(gulp.dest('./'))
});

// register default task
gulp.task('default', [
	'bower-install'
]);