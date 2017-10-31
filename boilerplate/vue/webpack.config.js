'use strict';
module.exports = {
  type: 'client',
  framework: 'vue',
  entry: {
    include: ['page', { 'app/app': 'page/app/app.js?loader=false' }],
    exclude: ['page/test'],
    template: 'view/layout.html',
    loader: {
      client: 'framework/vue/entry/client-loader.js'
    }
  },
  alias: {
    client: 'framework/vue/entry/client.js',
    app: 'framework/vue/app.js',
    asset: 'asset',
    mocks: 'mocks',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  options: {},
  loaders: {
    eslint: false,
    less: false,
    stylus: false
  },
  plugins: {
  },
  create() {
  },
  done() {

  }
};
