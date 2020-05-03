'use strict';
module.exports = {
  target: 'web',
  framework: 'vue',
  devtool: 'source-map',
  entry:  {
    index: 'src/index.js'
  },
  resolve: {
    alias: {
      asset: 'asset',
      component: 'component',
      framework: 'framework'
    }  
  }
};