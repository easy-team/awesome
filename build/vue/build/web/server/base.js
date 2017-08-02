'use strict';
const VueWebpack = require('easywebpack-vue');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebServerBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(VueWebpack.WebpackServerBuilder)) {
  constructor(config) {
    super(config);
  }
}
module.exports = WebpackWebServerBaseBuilder;