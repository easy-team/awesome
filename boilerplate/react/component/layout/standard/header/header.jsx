import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  componentDidMount() {
    console.log('----Header componentDidMount-----');
  }

  render() {
    return <header className="header">
      <div className="container"><h1>
        <a href="http://hubcarl.github.io/easywebpack/react/dev" className="router-link-active">EasyWebpack+React</a></h1>
        <ul className="nav">
          <li className="nav-item"><a href="http://hubcarl.github.io/easywebpack">easywebpack doc</a></li>
          <li className="nav-item"><a href="https://github.com/hubcarl/easywebpack-react">easywebpack-react</a></li>
          <li className="nav-item"><a href="https://github.com/hubcarl/easywebpack-cli">easywebpack-cli</a></li>
        </ul>
      </div>
    </header>;
  }
}
