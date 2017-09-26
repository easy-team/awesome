'use strict';
module.exports = {
  type: 'client',
  framework: 'react',
  manifest:false,
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html',
    extMatch: '.jsx',
    loader: {
      client: 'framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  options: {},
  loaders: {},
  plugins: {},
  create() {
    // call api custom config
  },
  done(){

  }
};