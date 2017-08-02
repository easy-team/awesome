'use strict';
module.exports = {
  commonsChunk: ['vendor'],
  entry: {
    include: 'app/web/page',
    exclude: ['app/web/page/test']
  }
};