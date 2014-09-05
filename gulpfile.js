// run `gulp` or `gulp bower-install` to inject
// script tags into index.html
// ============================

var gulp = require('gulp'),
	bowerFiles = require('main-bower-files'),
	inject = require("gulp-inject");

gulp.task('bower-install', function(){
  gulp.src('./public/index.html')
  	.pipe(inject(gulp.src(bowerFiles({
  		// trying to remove "/public/" from the src
  		// https://github.com/ck86/main-bower-files
  		filter: function(path){
  			return path
  		}

	}), { read: false }), {name: 'bower'}))
  	.pipe(gulp.dest('./public'))
});

// register default task
gulp.task('default', [
	'bower-install'
]);