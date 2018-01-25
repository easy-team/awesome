
const path = require('path');

module.exports = {
    framework: 'weex',
    entry: './page',
    template: 'view/layout.html',
    alias: {
        asset: 'asset',
        app: 'framework/vue/app.js',
        component: 'component',
        framework: 'framework',
        store: 'store'
    },
    loaders: {},
    plugins: {},
    lib: [path.join(__dirname, 'framework/weex/web.js')],
    onWeb() {},
    onWeex() {},
    done() {}
};
