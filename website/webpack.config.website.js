var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../example'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'demos'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
        // loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(eot|ttf|woff|svg)(\?.*)?(#.*)?$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css'],
    alias: {
      'component': '../../../src'
    }
  },
  externals: {
    react: 'React',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
    'react-dom': 'ReactDOM',
    'iscroll/build/iscroll-probe': 'IScroll',
    component: 'ReactIosComponent'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template.html'),
      chunks: ['app']
    })
  ],
  postcss: [autoprefixer]
};
