var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('sass',function(){
	return gulp.src("css/*.scss")
	.pipe(plumber(function(e) {
		console.log('There was an sass error'+e);
		this.emit('end');
	}))
	.pipe(sass())
	.pipe(gulp.dest("css"))
})

gulp.task('watch',function(){
	gulp.watch("css/*.scss",['sass']);
})

gulp.task('default',function(){
	gulp.start(['watch','sass'])
})