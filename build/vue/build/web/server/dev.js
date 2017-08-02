'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerDevBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
  }
}
module.exports = new ServerDevBuilder();
