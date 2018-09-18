'use strict';
module.exports = {
  target: 'web',
  framework: 'react',
  devtoo: 'source-map',
  entry: {
    app: 'src/app.jsx'
  },
  template: 'src/view/layout.html',
  dll: ['react', 'react-dom']
};