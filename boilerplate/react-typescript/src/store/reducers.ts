import { ARTICLE_DETAIL, ARTICLE_LIST } from './constant';

export default function update(state, payload) {
  const { type, data } = payload;
  const newState = { ...state };
  switch(type) {
    case ARTICLE_LIST: {
      newState.articles = data.articles;
      newState.total = data.total;
      break;
    }
    case ARTICLE_DETAIL: {
      newState.article = data.article;
      break;
    }
  }
  return newState;
}
