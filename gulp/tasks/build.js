var config = require('../config').build;
var gulp = require('gulp');

gulp.task('build', ['copy-components', 'copy-bower', 'copy-markup', 'react'], function () {
  return;
});

gulp.task('copy-components', function () {
  return gulp.src(config.components.src)
    .pipe(gulp.dest(config.components.dest));
});

gulp.task('copy-bower', function () {
  return gulp.src(config.bower.src)
    .pipe(gulp.dest(config.bower.dest));
});

gulp.task('copy-markup', function () {
  return gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest));
});
