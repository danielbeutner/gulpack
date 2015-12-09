import gulp from 'gulp';
import runSequence from 'run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';

/* Import package.json for later use */
import pkg from './package.json';

/* Importing all task we need */
import { clean } from './etc/gulp/clean';
import { html } from './etc/gulp/html';
import { style } from './etc/gulp/style';
import { lint } from './etc/gulp/lint';
import { lintConfig } from './etc/gulp/lint';
import { serve } from './etc/gulp/serve';

const $ = gulpLoadPlugins();

gulp.task('clean', clean);
gulp.task('html', html);
gulp.task('style', style);
gulp.task('lint:src', lint);
gulp.task('lint:config', lintConfig);
gulp.task('serve', serve);

gulp.task('default', ['clean'], cb => {
  $.util.log(pkg.name, pkg.version, pkg.license);
  runSequence(['html', 'style', 'lint:src', 'lint:config'], 'serve', cb);
});
