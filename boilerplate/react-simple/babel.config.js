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
  plugins: [],
  env: {
    development: {
      plugins: ['react-hot-loader/babel']
    }
  }
};
