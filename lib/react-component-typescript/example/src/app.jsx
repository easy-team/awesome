'use strict';

import React, { Component } from "react";

// export { Dialog, Toast }
import { Dialog, Toast } from 'easyjs-react-component-lib';
// import * as EasyComponentLib from 'easyjs-react-component-lib';


//  export default { Dialog, Toast }
// import EasyComponentLib from 'easyjs-react-component-lib';
// const { Dialog, Toast } = EasyComponentLib;

// console.log('>>>EasyComponentLib', EasyComponentLib);

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