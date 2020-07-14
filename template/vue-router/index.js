import Vue from 'vue';

import VueRouter from 'vue-router';
import Home from './component/home.vue';
import List from './component/list.vue';

Vue.use(VueRouter);

export default function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/list',
        component: List
      },
      {
        path: '/detail/:id',
        component: () => import('./detail.vue')
      },
      {
        path: '*', component: () => import('./notfound.vue')
      }
    ]
  });

  router.beforeEach((route, redirec, next) => {
    next();
  });

  router.afterEach((route, redirec) => {
    if (EASY_ENV_IS_BROWSER && route.matched && route.matched.length) {
      const matchComponent = route.matched[0].components.default;
      const asyncData = matchComponent.methods && matchComponent.methods.fetchApi;
      if (asyncData) {
        console.log('router afterEach trigger asyncData', route);
        asyncData(router.app.$store, route);
      }
    }
  });

  return router;
}