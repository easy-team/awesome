'use strict';
const path = require('path');
module.exports = {
  type: 'client',
  framework: 'vue',
  commonsChunk: ['vendor'],
  manifest:false,
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html',
    html: true
  },
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
    mocks: 'mocks',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  create() {
    // call api custom config
  }
};