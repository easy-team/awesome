import { createRouter, createWebHistory } from 'vue-router';

import ListView from './list';
import DetailView from './detail';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/detail/:id',
      component: DetailView
    },
    {
      path: '/',
      component: ListView
    },
  ]
});

export default router;
