'use strict';
const nodeExternals = require('webpack-node-externals');

module.exports = {
  framework: 'js',
  entry: {
    easy: 'src/index.tsx'
  },
  output: {
    // libraryExport: 'default'
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  externals: [nodeExternals()],
  rules:[
    { typescript : true }
  ],
  plugins: [
    { imagemini: false} 
  ],
  customize(webpackConfig) {
    return webpackConfig;
  }
};