'use strict';
module.exports = {
  type: 'client',
  framework: 'vue',
  entry: {
    include: 'page',
    exclude: ['page/test'],
    template: 'view/layout.html',
    buildDir: 'html'
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
  loaders: {
    eslint: false,
    less: false,
    stylus: false
  },
  plugins: {
    manifest: false
  },
  create() {
  },
  done() {

  }
};