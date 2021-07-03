import { createRouter, createWebHashHistory } from 'vue-router';

import ListView from './list';
import DetailView from './detail';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: DetailView
    }
  ]
});

export default router;
