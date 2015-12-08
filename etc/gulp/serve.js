import gulp from 'gulp';
import browserSync from 'browser-sync';
import {srcDir, destDir, index} from '../config';

export function serve() {
  browserSync.create();
  browserSync.init(
    {
      open: false,
      server: {
        baseDir: destDir,
        index: index
      }
    }
  );

  gulp.watch(srcDir + '/**/*.scss', ['style']);
  gulp.watch(srcDir + '/*.mustache', ['html']).on('change', browserSync.reload);
}
