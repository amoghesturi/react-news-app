import { REQUEST_ARTICLES,
  RECEIVED_ARTICLES,
  ERROR_ARTICLES } from '../actions/articles';

const articles = (state = {
  list: [],
  isFetching: false,
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return requestArticles(state);
    case RECEIVED_ARTICLES:
      return receivedArticles(state, action.articles);
    case ERROR_ARTICLES:
      return errorArticles(state, action.error);
    default:
      return state;
  }
}

const requestArticles = (state) => {
    return Object.assign( {}, state, { isFetching: true });
}

const receivedArticles = (state, articles) => {
  return Object.assign( {}, state, { list: articles, isFetching: false });
}

const errorArticles = (state, error) => {
  return Object.assign( {}, state, {isFetching: false, error})
}

export default articles;
