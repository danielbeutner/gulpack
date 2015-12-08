import path from 'path';
import webpack from 'webpack';
import {srcDir, destDir, devPort} from './etc/config';

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
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
}
