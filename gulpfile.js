var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
 
gulp.task('inline', function () {
    return gulp.src('./source/*.html')
        .pipe(inlinesource())
        .pipe(gulp.dest('./out'));
});