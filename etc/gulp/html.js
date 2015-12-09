import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { destDir, srcDir, index } from '../config';
import pkg from '../../package.json';

const $ = gulpLoadPlugins();

export function html() {
  gulp.src(srcDir + '/app.mustache')
    .pipe($.mustache({
      title: pkg.name
    }))
    .pipe($.rename(index))
    .pipe(gulp.dest(destDir));
}
