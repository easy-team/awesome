import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

ReactDOM.render(EASY_ENV_IS_DEV ? <AppContainer><App /></AppContainer> : <App />,
  document.getElementById('app'),
);
if (EASY_ENV_IS_DEV && module.hot) {
  module.hot.accept();
}