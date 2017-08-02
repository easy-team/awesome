'use strict';
const WebpackServerBaseBuilder = require('./base');
class ServerTestBuilder extends WebpackServerBaseBuilder {
  constructor(config) {
    super(config);
  }
}
module.exports = new ServerTestBuilder();
