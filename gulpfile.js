var gulp = require('gulp'),
    jasmine = require('gulp-jasmine'),
    reporters = require('jasmine-reporters'),
    istanbul = require('gulp-istanbul');

gulp.task('pre-test', function () {
  return gulp.src(['./index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('default', ['pre-test'], function () {
  return gulp.src(['spec/*_spec.js'])
    .pipe(jasmine())
    .pipe(istanbul.writeReports())
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});
