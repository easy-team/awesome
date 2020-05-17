'use strict';

import React, { Component } from "react";

import EasyComponentLib from 'easyjs-react-component-lib';

const { Dialog, Toast } = EasyComponentLib;

// import Toast from './component/toast'
// import Dialog from './component/dialog'

export default class ReactComponentTest extends Component {

  componentDidMount() {
    Toast.info('React Component Toast Test');
    Dialog.show(<h1>Dialog</h1>);
  }

  render() {
    return <div>React Toast, Dialog Component Test</div>
  }
}