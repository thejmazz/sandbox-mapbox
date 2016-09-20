'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sandbox Mapbox'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
}
