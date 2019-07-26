'use strict';
const path = require('path');
const ProgressBar = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  target: 'web',
  entry: {
    app: './src/app.js'
  },
  resolve: {
    extensions: [ '.jsx', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins:[
    new ProgressBar({
      width: 100,
      format: `webpack build [:bar] :percent (:elapsed seconds)`,
      clear: false
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: { html5: true, minifyCSS: true, collapseWhitespace: true },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true, 
    port: 9000,
    hot: true,
    inline: true,
    open: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
};