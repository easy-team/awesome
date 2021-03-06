'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import createStore from './store';
import Routes from './router'
import './app.css';

const App = () => {
  return EASY_ENV_IS_DEV ? <AppContainer><Routes /></AppContainer> : <Routes />;
};

const Entry = () => (<div>
  <Provider store={ createStore() }>
    <App />
  </Provider>
</div>
);


const render = () => {
  const root =  document.getElementById('app');
  ReactDOM.render(<Entry />, root);
}

if (EASY_ENV_IS_DEV && module.hot) {
  render();
  module.hot.accept();
} else {
  render();
}
