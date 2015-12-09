import gulp from 'gulp';
import browserSync from 'browser-sync';
import { srcDir, destDir, index } from '../config';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const compiler = webpack(webpackConfig);

export function serve() {
  browserSync.create();
  browserSync.init(
    {
      open: false,
      server: {
        baseDir: destDir,
        index: index,
        middleware: [
          webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
              colors: true,
              modules: false,
              chunks: false,
              chunkModules: false,
              version: false,
              timings: false,
              hash: false
            }
          }),
          webpackHotMiddleware(compiler)
        ]
      }
    }
  );
  gulp.watch(srcDir + '/**/*.{js,jsx}', ['lint:src']);
  gulp.watch(srcDir + '/**/*.scss', ['style']);
  gulp.watch(srcDir + '/*.mustache', ['html']).on('change', browserSync.reload);
}
