import gulp from 'gulp';
import browserSync from 'browser-sync';
import {baseDir, index} from '../config';

export function serve () {
  browserSync.create();
  browserSync.init(
    {
      open: false,
      server: {
        baseDir: baseDir,
        index: index
      }
    }
  );
}
