var config = require('../config').react;
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('react', function () {
  return gulp.src(config.src)
    .pipe(babel())
    .pipe(gulp.dest(config.dest));
});

