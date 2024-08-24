module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: false, // 默认 corejs 2
      targets: "> 0.05%, not dead"
    }],
  ],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { 'loose': true }],
    ['@babel/plugin-proposal-private-property-in-object', { 'loose': true }],
    ['@babel/plugin-proposal-class-properties', { 'loose': true }],
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['@babel/plugin-transform-runtime', {
      absoluteRuntime: false,
      corejs: false,
      helpers: true, // 默认 true，从 babel-runtimie 引入，而非每个模块 inline 代码
      regenerator: true,
    }]
  ]
}