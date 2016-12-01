const webpack = require('webpack');

module.exports = {
  entry: './source/index.js' ,
  output: {
    filename: 'bundle.js',
    path:  './dist',
    publicpath: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style!css" }
    ]
  }};
