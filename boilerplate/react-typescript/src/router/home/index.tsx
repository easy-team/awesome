import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'

import request from '@lib/request';

import './index.css';

class Home extends Component<any, any> {
  static async asyncData(locals) {
    return request.get('/api/list', locals);
  }

  render() {
    const { articles = [] } = this.props;
    return (<div className="easy-article-list">
      <ul>
        {articles.map(item => {
          return <li key={item.id} className="easy-article-item">
            <h2 className="easy-article-title">
              <Link to={'/detail/' + item.id}>{item.title}</Link>
            </h2>
            <div className="easy-article-summary">{item.summary}</div>
            <div className="easy-article-meta">
              <span>Word Count:{item.wordCount}  </span>
              <span>Create Time: {item.createTime}</span>
            </div>
          </li>;
        })}
      </ul>
    </div>);
  }
}

export default EASY_ENV_IS_DEV ? hot(Home) : Home;
