import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from '@store/index'
import Main from '@router/main'
import '@asset/css/blog.css'

export default class App extends Component {
  render() {
    const store = createStore();
    const { url } = store.getState();
    return (
      <Provider store={store}>
        <BrowserRouter location={url}>
          <Main></Main>
        </BrowserRouter>
      </Provider>
    );
  }
}