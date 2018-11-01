import React, { Component } from 'react';
import { connect } from 'react-redux';
import { list, add, del } from '../../store/actions';
import './home.css';
class Home extends Component {

  render() {
    const { add, del, list } = this.props;
    const id = list.length + 1;
    const item = {
      id,
      title: `React + Redux + React-Router + AntD 单页面实现-${id}`,
      summary: '基于 React + easywebpack 工程骨架项目',
      hits: 550 + id,
      url: 'https://github.com/hubcarl/egg-react-webpack-boilerplate'
    };
    return <div className="redux-nav-item">
      <div className="container">
        <h1>React + Redux + React-Router + AntD</h1>
        <ul className="smart-artiles" id="articleList">
          {list.map(function(item) {
            return <li key={item.id}>
              <div className="point">+{item.hits}</div>
              <div className="card">
                <h2><a href={item.url} target="_blank">{item.title}</a></h2>
                <div>
                  <ul className="actions">
                    <li>
                      <time className="timeago">{item.moduleName}</time>
                    </li>
                    <li className="tauthor">
                      <a href="#" target="_blank" className="get">Sky</a>
                    </li>
                    <li><a>+收藏</a></li>
                    <li>
                      <span className="timeago">{item.summary}</span>
                    </li>
                    <li>
                      <span className="redux-btn-del" onClick={() => del(item.id)}>Delete</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>;
          })}
        </ul>
      </div>
      <div className="redux-btn-add" onClick={() => add(item)}>Add</div>
    </div>;
  }
}


const mapStateToProps = state => {
  return {
    list: state.list
  };
};

export default connect(mapStateToProps, { add, del })(Home);
