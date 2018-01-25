'use strict';
const path = require('path');
module.exports = {
  type: 'client',
  framework: 'react',
  devtoo: 'source-map',
  entry: {
    include: 'page',
    exclude: ['page/test'],
    loader: {
      client: 'framework/entry/loader.js'
    }
  },
  template: 'view/layout.html',
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  loaders: {
    eslint: false,
    less: false,
    stylus: false
  },
  plugins: {},
  done(){}
};