var config = require('../config').build;
var gulp = require('gulp');

gulp.task('build', ['react'], function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
