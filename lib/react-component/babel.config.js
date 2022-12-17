module.exports = {
  'presets': [
    '@babel/preset-react',
    ['@babel/preset-env', {
      'modules': false,
      'useBuiltIns': false
    }]
  ],
  'plugins': [
    ['@babel/plugin-proposal-private-methods', { 'loose': true }],
    ['@babel/plugin-proposal-private-property-in-object', { 'loose': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/transform-runtime', {
      'absoluteRuntime': false,
      'corejs': false,
      'helpers': false,
      'regenerator': true,
      'useESModules': false
    }]
  ]
}