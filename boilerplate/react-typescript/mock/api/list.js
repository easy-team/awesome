const json = {
  "articles": [
    {
      "id": 1,
      "space": "egg-react",
      "slug": "init",
      "url": "https://easyjs.cn/egg-react/init",
      "title": "Egg React 服务端渲染(SSR)之快速开始",
      "summary": "基于 Egg + React + Webpack 服务端渲染开发指南1. 项目初始化1.1 通过 easywebpack-cli 脚手架初始化安装脚手架 npm install easywebpack-cli -g 命令行，然后就可以使用  easy 命令命令行运行 easy init选择 e...",
      "coverImage": null,
      "createTime": "2019-10-03T14:25:46.000Z",
      "updateTime": "2019-10-09T04:44:10.000Z",
      "wordCount": 1977
    },
    {
      "id": 2,
      "space": "egg-react",
      "slug": "start",
      "url": "https://easyjs.cn/egg-react/start",
      "title": "Egg React 服务端渲染(SSR)之从零开始",
      "summary": "从零开始搭建 Egg + React + Webpack 服务端渲染项目1. 初始化环境安装 Node LST (8.x.x) 环境： https://nodejs.org/zh-cn2. 初始化 egg 项目https://github.com/eggjs/egg-init/blob/mas...",
      "coverImage": null,
      "createTime": "2019-10-03T13:44:01.000Z",
      "updateTime": "2019-10-08T11:44:49.000Z",
      "wordCount": 1356
    },
    {
      "id": 3,
      "space": "egg-react",
      "slug": "node",
      "url": "https://easyjs.cn/egg-react/node",
      "title": "Egg React 服务端渲染 SSR(Server Side Render)",
      "summary": "目前 egg-view-react-ssr 支持 服务端渲染模式 和 前端渲染模式 两种渲染模式Egg + React 服务端 SSR 渲染模式这里服务端渲染指的是编写的 React 组件在 Node 服务端直接编译成完整的HTML, 然后直接输出给浏览器。MVVM 服务端渲染相比前端渲染，支...",
      "coverImage": null,
      "createTime": "2019-10-03T14:12:56.000Z",
      "updateTime": "2019-10-03T14:12:56.000Z",
      "wordCount": 524
    },
    {
      "id": 4,
      "space": "egg-react",
      "slug": "web",
      "url": "https://easyjs.cn/egg-react/web",
      "title": "Egg React 前端渲染 CSR(Client Side Render)",
      "summary": "Egg + React 客户端浏览器渲染模式调用 egg-view-react-ssr 的 renderClient 方法实现客户端浏览器渲染renderClient 表示 Node 服务端端只渲染一个包含 HTML，header，body 的一个简单 HTML 页面骨架， 具体页面内容由 R...",
      "coverImage": null,
      "createTime": "2019-10-15T12:03:53.000Z",
      "updateTime": "2019-10-15T12:03:53.000Z",
      "wordCount": 524
    },
    {
      "id": 5,
      "space": "egg-react",
      "slug": "Egg React Nunjucks 静态页面渲染",
      "url": "https://easyjs.cn/egg-react/asset",
      "title": "Egg React Nunjucks 前端渲染",
      "summary": "背景在 前端渲染模式 章节讲到了基于 React 的一体化的前端渲染模式，好处是不需要借助第三方模板引擎且无效关注静态资源注入问题，但有两个小的功能限制：layout 模板数据绑定能力较弱资源注入不能自己定义，比如 async， crossorigin 等配置针对上面问题 egg-view-r...",
      "coverImage": null,
      "createTime": "2018-12-17T06:37:54.000Z",
      "updateTime": "2019-06-03T07:09:18.000Z",
      "wordCount": 779
    },
    {
      "id": 6,
      "space": "egg-react",
      "slug": "html",
      "url": "https://easyjs.cn/egg-react/html",
      "title": "Egg React HTML 静态页面渲前端渲染",
      "summary": "背景在 前端渲染模式 和 asset 渲染模式 章节讲到了基于 React 的前端渲染模式，但都依赖  egg-view-react-ssr 插件，那如何基于已有 egg 模板引擎 (egg-view-nunjucks 或 egg-view-ejs) + Webpack 完全自定义前端方案呢？...",
      "coverImage": null,
      "createTime": "2019-10-08T07:11:39.000Z",
      "updateTime": "2019-10-08T07:11:39.000Z",
      "wordCount": 652
    },
    {
      "id": 7,
      "space": "egg-react",
      "slug": "config",
      "url": "https://easyjs.cn/egg-react/config",
      "title": "Egg React 服务端渲染(SSR) Webpack 配置说明",
      "summary": "Webpack 标准配置// ${root}/webpack.config.js module.exports = {   entry: {     app: 'app/web/page/app/index.js',  // js 文件需要自己实现 react.render 逻辑     he...",
      "coverImage": null,
      "createTime": "2019-10-03T15:05:12.000Z",
      "updateTime": "2019-10-03T15:05:12.000Z",
      "wordCount": 346
    },
    {
      "id": 8,
      "space": "egg-react",
      "slug": "build",
      "url": "https://easyjs.cn/egg-react/build",
      "title": "Egg React 服务端渲染(SSR) Webpack 构建流程",
      "summary": "基于Egg+React+Webpack构建流程1. 本地Egg项目启动首先执行node index.js 或者 npm run dev 启动 Egg应用在 Egg Agent 里面启动koa服务, 同时在koa服务里面启动Webpack编译服务挂载Webpack内存文件读取方法覆盖本地文件读取...",
      "coverImage": null,
      "createTime": "2018-12-14T09:56:06.000Z",
      "updateTime": "2019-06-05T07:33:41.000Z",
      "wordCount": 1120
    },
    {
      "id": 9,
      "space": "egg-react",
      "slug": "online",
      "url": "https://easyjs.cn/egg-react/online",
      "title": "Egg React 项目部署流程",
      "summary": "开发部署新项目开发在 egg-react-webpack-boilerplate 骨架项目中, 提供了一些demo, 如果要进行新项目开发，可以删除部分文件：app/web/page 是页面目录。下面的每个目录都是一个单独的页面，其中 spa 目录是一个单页面服务端渲染例子，其他是简单的 Re...",
      "coverImage": null,
      "createTime": "2018-11-26T09:46:50.000Z",
      "updateTime": "2019-05-23T07:04:10.000Z",
      "wordCount": 1179
    },
    {
      "id": 10,
      "space": "egg-react",
      "slug": "seo",
      "url": "https://easyjs.cn/egg-react/seo",
      "title": "Egg React 服务端渲染(SSR) SEO 实现",
      "summary": "Egg + React SSR SEO 实现MVVM 服务端渲染相比前端渲染，支持 SEO，更快的首屏渲染，相比传统的模板引擎，更好的组件化，前后端模板共用。在 Egg + React 的方案里面, HTML head 里面 meta 信息也作为 React 服务端渲染的一部分, 和普通的数据...",
      "coverImage": null,
      "createTime": "2019-10-03T15:02:58.000Z",
      "updateTime": "2019-10-09T11:50:23.000Z",
      "wordCount": 579
    },
    {
      "id": 11,
      "space": "egg-react",
      "slug": "antd",
      "url": "https://easyjs.cn/egg-react/antd",
      "title": "Egg React AntD 服务端渲染(SSR) 配置",
      "summary": "项目示例： https://github.com/easy-team/egg-react-webpack-boilerplate/tree/antd-theme按需加载依赖配置// ${root}/package.json {  &quot;devDependencies&quot;: {    &...",
      "coverImage": null,
      "createTime": "2018-11-06T06:00:08.000Z",
      "updateTime": "2019-05-27T06:11:57.000Z",
      "wordCount": 368
    },
    {
      "id": 12,
      "space": "egg-react",
      "slug": "babel",
      "url": "https://easyjs.cn/egg-react/babel",
      "title": "Egg React 构建 Babel 配置",
      "summary": "在进行 Egg + React 进行 SSR 模式开发时，运行 npm run dev  后你会看到如下界面， 启动了两个 Webpack 构建实例：Node 模式 和 Web 模式。SSR 运行需要 Webapck 单独构建 target: node   和 target: web  主要的...",
      "coverImage": null,
      "createTime": "2019-01-11T09:43:18.000Z",
      "updateTime": "2019-05-27T06:34:59.000Z",
      "wordCount": 659
    },
    {
      "id": 13,
      "space": "egg-react",
      "slug": "typescript",
      "url": "https://easyjs.cn/egg-react/typescript",
      "title": "Egg React TypeScript 服务端渲染实现",
      "summary": "骨架项目https://github.com/easy-team/egg-react-typescript-boilerplate多种渲染https://github.com/easy-team/egg-react-typescript-boilerplate/tree/awesome-ren...",
      "coverImage": null,
      "createTime": "2019-10-08T11:48:26.000Z",
      "updateTime": "2019-10-08T11:48:27.000Z",
      "wordCount": 38
    },
    {
      "id": 14,
      "space": "egg-react",
      "slug": "async",
      "url": "https://easyjs.cn/egg-react/async",
      "title": "Egg React 服务端渲染组件异步加载",
      "summary": "issue: react-loadable 怎么加入这个骨架中 #23安装依赖npm install react-loadable --save实现异步组件// async-image.jsx import React, { Component } from 'react'; import L...",
      "coverImage": null,
      "createTime": "2019-06-28T15:58:59.000Z",
      "updateTime": "2019-06-28T15:58:59.000Z",
      "wordCount": 266
    },
    {
      "id": 15,
      "space": "egg-react",
      "slug": "update",
      "url": "https://easyjs.cn/egg-react/update",
      "title": "Egg React Webpack 项目插件升级更新",
      "summary": "发布历史https://github.com/easy-team/egg-react-webpack-boilerplate/blob/master/CHANGELOG.md版本特性easywebpack体系通过 @easy-team 模式内置 Babel 7 方案 骨架分支： master，...",
      "coverImage": null,
      "createTime": "2019-10-08T11:49:14.000Z",
      "updateTime": "2019-10-08T11:49:14.000Z",
      "wordCount": 160
    },
    {
      "id": 16,
      "space": "egg-react",
      "slug": "about",
      "url": "https://easyjs.cn/egg-react/about",
      "title": "Egg React 服务端/前端渲染项目常见问题",
      "summary": "常见问题汇总AntD 按需加载与主题定制 以及 issue如果实现 Egg + React + Webpack  热更新？服务端渲染如何使用 react-loadabel 实现异步加载React 文件热更新入口配置模板import React from 'react'; import Reac...",
      "coverImage": null,
      "createTime": "2019-07-27T06:14:30.000Z",
      "updateTime": "2019-07-27T06:14:30.000Z",
      "wordCount": 216
    },
    {
      "id": 17,
      "space": "egg-react",
      "slug": "demo",
      "url": "https://easyjs.cn/egg-react/demo",
      "title": "Egg React 社区作品",
      "summary": "easy-teamhttps://github.com/easy-team/egg-react-webpack-boilerplatehttps://github.com/easy-team/egg-react-typescript-boilerplateReact + Mobx 例子http...",
      "coverImage": null,
      "createTime": "2019-07-27T06:25:49.000Z",
      "updateTime": "2019-10-15T03:14:47.000Z",
      "wordCount": 30
    }
  ]
};
module.exports = function (req, res) {
  const id = req.uri.query.id;
  if (id) {
    const article = json.articles.find(item => item.id === Number(id));
    return { article };
  }
  return json;
}