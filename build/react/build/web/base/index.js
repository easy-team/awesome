'use strict';
const WebpackWebBaseBuilder = WebpackBuilder => class extends WebpackBuilder {
  constructor(config) {
    super(config);
  }
};
module.exports = WebpackWebBaseBuilder;