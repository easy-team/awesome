# easywebpack-weex-boilerplate

Weex Native and Web building boilerplate for Webpack

## 使用

#### 安装cli

```bash
npm install easywebpack-cli -g
```

#### 安装依赖

```bash
npm install
npm start
```



#### 启动应用

```bash
npm start
```


#### 项目构建

```bash
// 直接运行(编译文件全部在内存里面,本地开发使用)
npm start

// 编译文件到磁盘打包使用(发布测试环境)
npm run build-dev 或者 easywebpack build dev

// 编译文件到磁盘打包使用(发布正式环境)
npm run build 或者 easywebpack build prod

```

## 不使用cli, 直接使用 easywebpack-weex

```js
//build/index.js
const WeexEasyWebpack = require('easywebpack-weex');
const weexNativeConfig = require('./weex/native');
const weexWebConfig = require('./weex/web');
const NODE_SERVER = process.env.NODE_SERVER;

const webpackConfig = [weexNativeConfig, weexWebConfig];

if (NODE_SERVER) {
  WeexEasyWebpack.server(webpackConfig);
} else {
  WeexEasyWebpack.build(webpackConfig);
}
```


start webpack debug server: http://127.0.0.1:9000/debug

![UI-VIEW](https://github.com/hubcarl/easywebpack-weex-boilerplate/blob/master/doc/webpack-tool-ui-view.png)
