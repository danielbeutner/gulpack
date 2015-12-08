import del from 'del';

export function clean() {
  del(['build/*'], {dot: true});
}
