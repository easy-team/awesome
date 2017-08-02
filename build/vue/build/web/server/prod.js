'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerProdBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
  }
}

module.exports = new ServerProdBuilder();