import { sync } from 'vuex-router-sync';
import store from 'store/app';
import router from 'component/app/router';
import Entry from './app.vue';
import App from 'app';
import Layout from 'component/layout/app';

App.component(Layout.name, Layout);

sync(store, router);

export default App.init({
  ...Entry,
  router,
  store
});
