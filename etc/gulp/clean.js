import del from 'del';

// gulp.task('clean', () => del(['build/*'], {dot: true}));
export function clean () {
  del(['build/*'], {dot: true});
}
