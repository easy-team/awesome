'use strict';
const path = require("path");
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  framework: 'react',
  target: 'web',
  devtool: 'source-map',
  entry: {
    index: './src/index.tsx'
  },
  resolve: {
    alias:{
      '@asset': resolve('src/asset'),
      '@component': resolve('src/component'),
      '@lib': resolve('src/lib'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@typing': resolve('src/typing')
    }
  },
  module: {
    rules:[
      {
        typescript: true
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        changeOrigin: true,
        // 本地开发使用 mock 服务，部署时，请在代码加上 host 请求
        target: 'http://127.0.0.1:8888',
        pathRewrite: {'/api' : '/api'}
      }
    }
  }
};
