'use strict';
const ReactWebpack = require('easywebpack-react');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebServerBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(ReactWebpack.WebpackServerBuilder)) {
  constructor(config) {
    super(config);
  }
}
module.exports = WebpackWebServerBaseBuilder;