'use strict';
const WebpackWeexBuilder = require('../../../lib/weex');
const WebpackWeexBaseBuilder = require('../base');
class WebpackWeexNativeBaseBuilder extends WebpackWeexBaseBuilder(WebpackWeexBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('weex/native');
  }
}
module.exports = WebpackWeexNativeBaseBuilder;