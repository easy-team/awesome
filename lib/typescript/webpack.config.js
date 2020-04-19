'use strict';
module.exports = {
  framework: 'js',
  entry: {
    lib: 'src/lib.ts'
  },
  output: {
    library : 'EasyLib',
    // libraryExport: 'default'
  },
  module: {
    rules:[
      { typescript : true }
    ]
  },
  compile: {
    cache: false,
    thread: false
  }
};