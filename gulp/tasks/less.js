var config = require('../config').less;
var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');

gulp.task('less', function() {
  return gulp.src(config.src)
    .pipe(less({
      paths: [ ]
    })) 
    .pipe(gulp.dest(config.dest));
});
