import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import runSequence from 'run-sequence';

/* Importing all task we need */
import * from 'etc/tasks';

gulp.task('default', cb => {
  // runSequence('clean', cb);
});
