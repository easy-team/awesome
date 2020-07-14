'use strict';
const egg = require('egg');
module.exports = class {{classname}}Service extends egg.Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
  }

  async getList() {
    return {};
  }
};