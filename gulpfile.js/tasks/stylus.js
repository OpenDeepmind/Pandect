var gulp = require('gulp');
var browserSync  = require('browser-sync');
var stylus = require('gulp-stylus');
var notify = require('gulp-notify');
var config = require('../config/stylus');

gulp.task('stylus', function () {
	gulp.src(config.src)
		.pipe(stylus(config.settings))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream:true}));
});