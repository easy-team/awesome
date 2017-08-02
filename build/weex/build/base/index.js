'use strict';
const merge = require('easywebpack').merge;
const webpackConfig = require('../config');
const WebpackBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(merge(webpackConfig, config));
    this.setAlias('app', 'app/web/framework/vue/app');
    this.setAlias('framework', 'app/web/framework');
  }
};
module.exports = WebpackBaseBuilder;
