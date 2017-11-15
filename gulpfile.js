var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var styleInject = require("gulp-style-inject");
var pug = require("gulp-pug");

gulp.task('pug', function () {
  return gulp.src('./source/views/*.pug')
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('./out'));
});
 
gulp.task('inline', function () {
  return gulp.src('./source/*.html')
    .pipe(inlinesource())
    .pipe(styleInject({
      encapsulated: true,
      path: './source/'
    }))
    .pipe(gulp.dest('./out'));
});