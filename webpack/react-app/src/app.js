'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import './app.css';

class App extends Component {
  render() {
    return <div className="title"><h1>React App</h1></div>
  }
}

ReactDOM.render(module.hot ? <AppContainer><App /></AppContainer> : <App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
