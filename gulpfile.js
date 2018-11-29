'use strict';

let gulp = require('gulp');
let inlinesource = require('gulp-inline-source');
let styleInject = require('gulp-style-inject');
let pug = require('gulp-pug');

gulp.task('pug', () => {
  return gulp.src('./source/views/*.pug')
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest('./out'));
});

gulp.task('inline', () => {
  return gulp.src('./source/*.html')
    .pipe(inlinesource())
    .pipe(styleInject({
      encapsulated: true,
      path: './source/'
    }))
    .pipe(gulp.dest('./out'));
});

gulp.task('default', ['pug', 'inline']);