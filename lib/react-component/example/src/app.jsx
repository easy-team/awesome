'use strict';

import React, { Component } from "react";

import EasyComponentLib from 'easy-component';

export default class ReactComponentTest extends Component {

  componentDidMount() {
    console.log('>>>EasyComponentLib', EasyComponentLib);
  }

  render() {
    return <div>123456</div>
  }
}