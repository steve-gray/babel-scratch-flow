import babel from 'gulp-babel';
import flow from 'gulp-flowtype';
import gulp from 'gulp';
import lint from 'gulp-eslint';

const inputFiles = 'src/**/*.js';

gulp.task('babel', () =>
  gulp.src(inputFiles)
    .pipe(babel())
    .pipe(gulp.dest('dist')));

gulp.task('typecheck', () =>
  gulp.src(inputFiles)
    .pipe(flow()));

gulp.task('lint', () =>
  gulp.src(inputFiles)
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failAfterError()));

gulp.task('default', ['babel', 'lint', 'typecheck']);
