import gulp from 'gulp';
import browserSync from 'browser-sync';
import {baseDir} from '../config';

export function serve () {
    browserSync.create();
    browserSync.init(
      {
        server: {
          baseDir
        }
      }
    );
}
