'use strict';

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import request from './request';

Vue.use(Vuex);

const actions = {

  SET_ARTICLE_LIST: async (store, json) => {
    return request.post('/api/article/list', json, store).then(response => {
      store.commit(Type.SET_ARTICLE_LIST, response.data);
    });
  },
  SET_ARTICLE_DETAIL: (store, json) => {
    const { commit, dispatch, state } = store;
    return request.get(`/api/article/${json.id}`, store)
      .then(response => {
        commit(Type.SET_ARTICLE_DETAIL, response.data);
      });
  },
  SET_SAVE_ARTICLE: (store, json) => {
    const { commit, dispatch, state } = store;
    return request.post('/api/article/add', json, store).then(response => {
      commit(Type.SET_SAVE_ARTICLE, json);
    });
  },
  DELETE_ARTICLE: (store, { id }) => {
    // 鉴权 TODO
    const { commit, dispatch, state } = store;
    return request.get(`/api/article/del/${id}`, store)
      .then(response => {
        commit(Type.DELETE_ARTICLE, { id });
      });
  },
};

export default actions;