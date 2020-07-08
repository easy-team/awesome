import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import { ARTICLE_LIST, ARTICLE_DETAIL } from '@store/constant';
import Header from '@component/header'
import Route from '@component/route';
import Home from '../home';
import Detail from '../detail';
import Async from '../async';
import About from '../about';
import Hook from '../hook';
import './index.css';

interface PropType {
  url: string;
}

class Main extends Component {

  tabClick = (e) => {
    console.log('click', e.target);
  }

  render() {
    return <div>
      <Header></Header>
      <ul className="menu-tab">
        <li onClick={this.tabClick}><Link to="/">Home</Link></li>
        <li onClick={this.tabClick}><Link to="/async">Async</Link></li>
        <li onClick={this.tabClick}><Link to="/hook">Hook</Link></li>
        <li onClick={this.tabClick}><Link to="/about">About</Link></li>
      </ul>
      <Switch>
        <Route path="/async" component={Async} />
        <Route path="/about" component={About} />
        <Route path="/hook" component={Hook} />
        <Route type={ARTICLE_DETAIL} path="/detail/:id" component={Detail} propKeys={['article']} />
        <Route type={ARTICLE_LIST} path="/" component={Home} propKeys={['articles']} />
      </Switch>
    </div>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
