'use strict';
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  target: 'web',
  framework: 'react',
  devtoo: 'eval',
  entry: {
    app: 'src/app.js'
  },
  template: 'src/view/layout.html',
  lib: ['react', 'react-dom'],
  loaders: {
    babel: {
      include: [resolve('src'), resolve('node_modules')]
    },
    less: {
      include: [resolve('src'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: { // AntD Theme Customize
          'primary-color': 'red',
          'link-color': '#1DA57A',
          'border-radius-base': '2px'
        }
      }
    }
  }
};