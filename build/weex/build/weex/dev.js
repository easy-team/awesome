'use strict';
const WebpackWeeNativeBaseBuilder = require('./base');
class WeexBuilder extends WebpackWeeNativeBaseBuilder{
  constructor(config) {
    super(config);
  }
}
module.exports = new WeexBuilder();
