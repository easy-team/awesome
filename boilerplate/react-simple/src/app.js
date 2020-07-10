'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import Test from './component/test'


ReactDOM.render(EASY_ENV_IS_DEV ? <AppContainer><Test /></AppContainer> : <Test />, document.getElementById('app'));
if (EASY_ENV_IS_DEV) {
  module.hot.accept();
}
