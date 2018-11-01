'use strict';
module.exports = {
  target: 'web',
  framework: 'react',
  devtoo: 'source-map',
  entry: {
    app: 'src/app.js'
  },
  template: 'src/view/layout.html',
  dll: ['react', 'react-dom']
};