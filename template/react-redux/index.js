import { createStore } from 'redux';
import reducers from './reducers';

export default function () {
  return createStore(reducers, {
    list: [{
      id: 1,
      title: 'Webpack 配置官方文档',
      summary: '基于 Egg + React + Webpack 服务端渲染同构工程骨架项目',
      hits: 550,
      url: 'https://github.com/easy-team/egg-react-webpack-boilerplate'
    }, {
      id: 2,
      title: '前端工程化解决方案 easywebpack',
      summary: 'programming instead of configuration, webpack is so easy',
      hits: 550,
      url: 'https://github.com/easy-team/easywebpack'
    }, {
      id: 3,
      title: '前端工程化解决方案脚手架 easywebpack-cli',
      summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
      hits: 278,
      url: 'https://github.com/easy-team/easywebpack-cli'
    }]
  });
};
