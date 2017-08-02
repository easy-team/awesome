'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientProdBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
  }
}
module.exports = new ClientProdBuilder();