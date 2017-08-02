'use strict';
const EasyWebpack = require('easywebpack-vue');
const clientConfig = require('./web/client').create();
const serverConfig = require('./web/server').create();
const webpackConfig = [clientConfig, serverConfig];
if (process.env.NODE_SERVER) {
  EasyWebpack.server(webpackConfig);
} else {
  EasyWebpack.build(webpackConfig, () => {
    console.log('build success');
  });
}