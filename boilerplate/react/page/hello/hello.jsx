'use strict';
import React, { Component } from 'react';
import Header from 'component/layout/standard/header/header.jsx';
import './hello.css';
export default class Hello extends Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(this.state.message);
  }

  componentDidMount(){
    console.log('----componentDidMount-----');
  }
  render() {
    return <div><Header></Header><div className="content">{this.state.message}, <button onClick={this.handleClick}>Say hello</button></div></div>;
  }
}