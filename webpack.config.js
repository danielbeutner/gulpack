import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: '#source-map',
  context: path.join(__dirname, 'src', 'js'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'src', 'js'),
    publicPath: '/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {},
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
