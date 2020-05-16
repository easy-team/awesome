'use strict';
module.exports = {
  target: 'web',
  framework: 'react',
  entry: {
    app: 'src/app.jsx'
  },
  module: {
    rules: [
      {
        babel: {
          exclude: []
        }
      }
    ]
  },
  plugins:[
    { imagemini: false }
  ],
  compile: {
    cache: false,
    thread: false
  }
};