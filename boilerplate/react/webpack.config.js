'use strict';
const path = require('path');
module.exports = {
  type: 'client',
  framework: 'react',
  commonsChunk: ['vendor'],
  manifest:false,
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html',
    extMatch: '.jsx',
    html: true,
    loader: {
      client: 'framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  create() {
    // call api custom config
  }
};