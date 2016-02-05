var config = require('../config').build;
var gulp = require('gulp');

gulp.task('build', ['copy-fonts', 'copy-assets', 'copy-bower', 'copy-markup', 'react', 'less'], function () {
  return;
});

gulp.task('copy-fonts', function () {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest));
});

gulp.task('copy-assets', function () {
  return gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dest));
});

gulp.task('copy-bower', function () {
  return gulp.src(config.bower.src)
    .pipe(gulp.dest(config.bower.dest));
});

gulp.task('copy-markup', function () {
  return gulp.src(config.markup.src)
    .pipe(gulp.dest(config.markup.dest));
});
