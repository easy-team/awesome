'use strict';
const path = require('path');
module.exports = {
  type: 'client',
  framework: 'react',
  devtoo: 'source-map',
  entry: {
    include: 'page',
    exclude: ['page/[a-z]+/(component|store)'],
    loader: {
      client: 'framework/entry/loader.js'
    }
  },
  template: 'view/layout.html',
  dll: ['react', 'react-dom'],
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  loaders: {},
  plugins: {},
  done(){}
};