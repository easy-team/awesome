'use strict';
module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "last 2 versions",
            "Android >= 4"
          ]
        }
      }
    ]
  ],
  "plugins": [
    'react-hot-loader/babel',
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread"
  ]
};
