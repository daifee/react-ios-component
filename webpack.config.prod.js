var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var isProdEnv = process.env.NODE_ENV === 'production';
var target = {
  js: isProdEnv ? 'react-ios-component.min.js' : 'react-ios-component.js',
  css: isProdEnv ? 'react-ios-component.min.css' : 'react-ios-component.css'
};

module.exports = {
  // devtool: 'source-map',
  entry: {
    app: './src'
  },
  output: {
    filename: target.js,
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactIosComponent',
    libraryTarget: 'umd'
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
        // loader: 'style!css!postcss!sass',
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      },
      {
        test: /\.(eot|ttf|woff|svg)(\?.*)?(#.*)?$/,
        loader: 'url?name=fonts/[name].[hash].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  externals: {
    'iscroll/build/iscroll-probe': {
      root: 'IScroll',
      commonjs: 'iscroll',
      commonjs2: 'iscroll',
      amd: 'iscroll'
    },
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom'
    },
    'react-addons-css-transition-group': {
      root: ['React', 'addons', 'CSSTransitionGroup'],
      commonjs: 'react-addons-css-transition-group',
      commonjs2: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ExtractTextPlugin(target.css)
  ],
  postcss: [autoprefixer]
};
