'use strict';
module.exports = {
  type: 'client',
  framework: 'vue',
  devtool: 'source-map',
  entry: './src/page',
  template: 'view/layout.html',
  alias: {
    asset: 'asset',
    component: 'component',
    framework: 'framework'
  },
  loaders: {},
  plugins: {},
  done(){

  }
};