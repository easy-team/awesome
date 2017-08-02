'use strict';
const path = require('path');
const WebpackWebBuilder = require('../../../lib/web');
const WebpackWeexBaseBuilder = require('../base');
class WebpackWeexWebBaseBuilder extends WebpackWeexBaseBuilder(WebpackWebBuilder) {
  constructor(config) {
    super(config);
    this.setPrefix('weex/web');
    this.addEntry('vendor', [path.join(this.config.baseDir,'app/web/framework/weex/web.js')]);
  }
}
module.exports = WebpackWeexWebBaseBuilder;