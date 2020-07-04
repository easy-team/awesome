'use strict';
import axios from 'axios';
axios.defaults.baseURL = EASY_ENV_IS_DEV ? '' : 'Your Online Service Host';
axios.defaults.timeout = 15000;
axios.defaults.xsrfHeaderName = 'x-csrf-token';
axios.defaults.xsrfCookieName = 'csrfToken';
export default {
  async post(url, json, options = { origin: '' }) {
    const headers = {};
    const res = await axios.post(`${options.origin}${url}`, json, { headers });
    return res.data;
  },
  async get(url, options = { origin: '' }) {
    const res = await axios.get(`${options.origin}${url}`);
    return res.data;
  }
};