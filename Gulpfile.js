var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
  sass: ['scss/**/*.scss']
};

gulp.task('sass', function(done) {
  return gulp.src('./scss/site.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function() {
  return gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass']);
