'use strict';
const nodeExternals = require('webpack-node-externals');

module.exports = {
  framework: 'js',
  entry: {
    easy: 'src/index.js'
  },
  output: {
    // libraryExport: 'default'
  },
  externals: [nodeExternals()],
  plugins: [
    { imagemini: false} 
  ],
  customize(webpackConfig) {
    console.log(webpackConfig.target);
    return webpackConfig;
  }
};