'use strict';
module.exports = {
  framework: 'weex',
  entry: {
    include: 'page',
    exclude: ['page/html'],
    template: 'view/layout.html',
    buildDir: 'html'
  },
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
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
    // call api custom config
  },
  onWeb(){
    this.addEntry('vendor', [path.join(this.config.baseDir, 'framework/weex/web.js')]);
  },
  onWeex(){

  },
  done(){

  }
};