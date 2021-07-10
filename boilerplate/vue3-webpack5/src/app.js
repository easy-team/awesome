import { createApp } from 'vue';
import store from './store/app';
import router from './router';
import App from './app.vue';

import './asset/css/global.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
