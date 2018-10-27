const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = source => path.resolve(__dirname, source);

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    filename: 'app.bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'app': resolve('src'),
      '$': resolve('node_modules')
    }
  },
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:  /\.(jpe?g|png|jpg|gif|svg|wav)$/i,
        loader: 'file-loader',
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
};
