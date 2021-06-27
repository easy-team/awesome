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
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-syntax-dynamic-import',
    [
      'import',
      {
        'libraryName': 'antd',
        'style': 'css'
      }
    ]
  ],
  env: {
    development: {
      plugins: ['react-hot-loader/babel']
    }
  },
  comments: false
};
