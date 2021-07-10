
import { createStore } from 'vuex'

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  articleList: [],
  article: {}
};

export default createStore({
  state,
  actions,
  getters,
  mutations
});
