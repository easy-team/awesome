'use strict';
module.exports = {
  type: 'client',
  framework: 'vue',
  manifest: false,
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html'
  },
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
    mocks: 'mocks',
    component: 'component',
    framework: 'framework',
    store: 'store'
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
