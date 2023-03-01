'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
              debug: true, // на випадок якщо ми хочемо бачити, що відбувається, отримати повну інформацію
              corejs: 3,
              useBuiltIns: "usage"
          }]]
        }
      }
    }
  ]
}
};
