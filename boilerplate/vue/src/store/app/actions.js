

import * as Type from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import Article from '../../mocks/article/list';
Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {

      // return axios.get(`${host}/app/api/article/list`)
      //  .then(response => {
      //    let data = response.data.list;
      //    commit(Type.SET_ARTICLE_LIST, data);
      //    return data;
      //  })
      return Promise.resolve(Article.getPage(1, 10)).then(data => {
        commit(Type.SET_ARTICLE_LIST, data.list);
      });
    }
    return Promise.resolve();
  },

  FETCH_ARTICLE_DETAIL: ({ commit, dispatch, state }, { id }) => {
    if (state.article.id !== id) {
      return axios.get(`${host}/app/api/article/${id}`)
        .then(response => {
          const data = response.data;
          commit(Type.SET_ARTICLE_DETAIL, data);
        });
    }
    return Promise.resolve();
  }
};

export default actions;


