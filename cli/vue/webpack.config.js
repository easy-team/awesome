'use strict';
module.exports = {
  framework: 'vue',
  commonsChunk: ['vendor'],
  entry: {
    include: 'page',
    exclude: ['page/html']
  },
  alias: {
    asset: 'asset',
    app: 'framework/vue/app.js',
    component: 'component',
    framework: 'framework',
    store: 'store'
  },
  packs: {
  },
  create() {
    if (this.type === 'client') {
      this.addEntry('vendor', ['vue', 'axios']);
    }
  }
};
