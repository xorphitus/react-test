import gulp from 'gulp';
import babel from 'gulp-babel';
import eslint from 'gulp-eslint';

gulp.task('default', () => {
  return gulp.src('gulp/assets/javascripts/app.jsx')
    .pipe(babel())
    .pipe(gulp.dest('app/assets/javascripts/components'));
});

gulp.task('lint', () => {
  return gulp.src(['gulp/assets/javascripts/app.jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
