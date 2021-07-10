import Vue from 'vue';
import axios from 'axios';
import { sync } from 'vuex-router-sync';
import store from './store/app';
import router from './router';
import app from './app.vue';
import layout from './view/layout';

Vue.prototype.$http = axios;
Vue.component(layout.name, layout);

sync(store, router);

new Vue({
  ...app,
  router,
  store
}).$mount('#app');
