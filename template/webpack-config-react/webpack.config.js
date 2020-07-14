'use strict';
// Document: https://www.yuque.com/easy-team/easywebpack
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  target: 'web',
  framework: 'react',
  devtool: 'source-map',
  entry:  {
    index: 'src/index.js'
  },
  resolve: {
    alias: {
      asset: resolve('src/asset'),
      component: resolve('src/component')
    }  
  },
  module: {
    rules: [
      { eslint: false }
    ]
  },
  plugins: [
    { imagemini: false }
  ]
};