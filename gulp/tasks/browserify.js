var config = require('../config').react;
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('browserify', function () {
    browserify('./public/components/main.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest(config.dest));
});
