'use strict';
import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Menu } from 'antd';

import Home from './component/home';
import About from './component/about';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 'home' };
  }

  handleClick(e) {
    console.log('click ', e, this.state);
    this.setState({
      current: e.key
    });
  }

  render() {
    return <BrowserRouter><div>
      <Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>;
  }
}

export default App;
