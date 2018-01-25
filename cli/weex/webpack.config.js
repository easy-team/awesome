'use strict';
const path = require('path');
module.exports = {
  framework: 'weex',
  entry: './src/page',
  template: 'view/layout.html',
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  loaders: {},
  plugins: {},
  lib: [path.join(this.config.baseDir, 'framework/weex/web.js')],
  done(){

  }
};