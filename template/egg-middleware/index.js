'use strict';
module.exports = () => {
  return async function locale(ctx, next) {
    await next();
  };
};