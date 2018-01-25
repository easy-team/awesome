
module.exports = {
  type: 'client',
  framework: 'vue',
  entry: {
    include: ['page', { 'app/app': 'page/app/app.js?loader=false' }],
    exclude: ['page/test'],
    loader: {
      client: 'framework/vue/entry/client-loader.js'
    }
  },
  template: 'view/layout.html',
  alias: {
    client: 'framework/vue/entry/client.js',
    app: 'framework/vue/app.js',
    asset: 'asset',
    mocks: 'mocks',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  lib: ['vue', 'vuex', 'axios'],
  loaders: {},
  plugins: {},
  done() {

  }
};
