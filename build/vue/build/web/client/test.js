'use strict';
const WebpackClientBaseBuilder = require('./base');
class ClientDevBuilder extends WebpackClientBaseBuilder {
  constructor(config) {
    super(config);
  }
}
module.exports = new ClientDevBuilder();
