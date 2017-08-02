'use strict';
const path = require('path');
const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebClientBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(VueWebpack.WebpackClientBuilder)) {
  constructor(config) {
    super(config);
    this.addEntry('vendor', ['vue', 'axios']);
  }
}
module.exports = WebpackWebClientBaseBuilder;