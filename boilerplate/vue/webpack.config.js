
module.exports = {
  target: 'web',
  framework: 'vue',
  entry: {
    app: 'src/app.js'
  },
  template: 'src/view/index.html',
  lib: ['vue', 'vuex', 'axios']
};
