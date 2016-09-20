'use strict'

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.js$/,
      include: path.resolve('node_modules/mapbox-gl-shaders/index.js'),
      loader: 'transform/cacheable?brfs'
    }],
    postLoaders: [{
      include: /node_modules\/mapbox-gl-shaders/,
      loader: 'transform',
      query: 'brfs'
    }]
  },
  resolve: {
    alias: {
      'webworkify': 'webworkify-webpack',
      'gl-matrix': path.resolve('./node_modules/gl-matrix/dist/gl-matrix.js')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sandbox Mapbox'
    })
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
}
