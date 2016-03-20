import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { srcDir } from '../config.js';

const $ = gulpLoadPlugins();

export function lint() {
  return gulp.src(srcDir + './**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}

export function lintConfig() {
  return gulp.src(
    [
      './gulpfile.babel.js',
      './webpack.config.js',
      './etc/**/*.js'
    ]
  )
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
}
