'use strict';
const path = require('path');
const ReactWebpack = require('easywebpack-react');
const WebpackBaseBuilder = require('../../base');
const WebpackWebBaseBuilder = require('../base');
class WebpackWebClientBaseBuilder extends WebpackWebBaseBuilder(WebpackBaseBuilder(ReactWebpack.WebpackClientBuilder)) {
  constructor(config) {
    super(config);

  }
}
module.exports = WebpackWebClientBaseBuilder;