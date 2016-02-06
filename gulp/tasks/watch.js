var config = require('../config').watch;
var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('watch', function () {
  watch(config.src, batch(function (events, done) {
    gulp.start('build', done);
  }));
});
