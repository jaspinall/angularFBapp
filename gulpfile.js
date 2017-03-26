var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('css', function(){
  return gulp.src('build/styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('client/styles'))
});

gulp.task('default', [ 'css' ]);
