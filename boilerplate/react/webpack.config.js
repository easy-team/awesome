'use strict';
const path = require('path');
module.exports = {
  type: 'client',
  framework: 'react',
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html',
    buildDir: 'html',
    loader: {
      client: 'framework/entry/loader.js'
    }
  },
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  cssExtract: true,
  options: {},
  loaders: {
    eslint: false,
    less: false,
    stylus: false
  },
  plugins: {
    build:false,
    manifest: false,
    imagemini: false
  },
  create() {
    // call api custom config
  },
  done(){

  }
};