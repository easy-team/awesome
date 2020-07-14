'use strict';
module.exports = app => {
  return class {{classname}}Controller extends app.Controller {
    async index(ctx) {
      await ctx.render('index.js', { message: 'egg learning' });
    }
  };
};