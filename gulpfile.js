const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('*.scss', gulp.series('sass'));
});
