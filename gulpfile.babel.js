import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('default', () => {
    return gulp.src('gulp/assets/javascripts/app.js')
        .pipe(babel())
        .pipe(gulp.dest('app/assets/javascripts/components'));
});
