'use strict';
const WeexWebpack = require('easywebpack-weex');
const weexConfig = require('./weex').create();
const webConfig = require('./web').create();
const NODE_SERVER = process.env.NODE_SERVER;
const buildConfig = [webConfig, weexConfig];

if (NODE_SERVER) {
  WeexWebpack.server(buildConfig);
} else {
  WeexWebpack.build(buildConfig);
}
