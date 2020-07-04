import React, { Component } from 'react';
import './index.css';
export default class Header extends Component {
  render() {
    return <header className="header">
      <div className="container"><h1>
        <a href="/" className="router-link-active">React + TypeScript</a></h1>
      </div>
    </header>;
  }
}
