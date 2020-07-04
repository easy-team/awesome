'use strict';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import request from '@lib/request';

class Detail extends Component<any, any> {
  static async asyncData(locals, route) {
    const id = route.match.params.id;
    return request.get(`/api/list?id=${id}`, locals);
  }

  render() {
    const { article } = this.props;
    return article ? <div>
      <h2 className="easy-article-detail-title">{article.title}</h2>
      <div className="easy-article-info">
        <iframe src={article.url} frameBorder="0" width="100%" style={{minHeight: '800px'}}></iframe>
      </div>
    </div> : null;
  }
}

export default EASY_ENV_IS_DEV ? hot(Detail) : Detail;
