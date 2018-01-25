import Vue from 'vue';
import './filter';
import './directive';
import './component';

const App = {};

App.init = options => App.client(options);


App.client = options => {
  Vue.prototype.$http = require('axios');
  const app = new Vue(options);
  app.$mount('#app');
};


App.use = component => {
  Vue.use(component);
};

App.component = (name, component) => {
  Vue.component(name, component);
};


export default App;
