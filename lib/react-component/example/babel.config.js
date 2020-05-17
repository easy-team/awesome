module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    "@babel/plugin-proposal-class-properties",
    ['@babel/transform-runtime', {
      "absoluteRuntime": false,
      "corejs": false,
      "helpers": false,
      "regenerator": true,
      "useESModules": false
    }]
  ]
};
