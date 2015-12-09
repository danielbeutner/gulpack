import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import { destDir, srcDir } from '../config';

const $ = gulpLoadPlugins();

export function style() {
  gulp.src(srcDir + '/style/app.scss')
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.sourcemaps.init())
    .pipe($.postcss([autoprefixer]))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(destDir))
    .pipe(browserSync.stream());
}
