import { combineReducers } from 'redux';
import categories from './categories';
import sources from './sources';
import articles from './articles';

export default combineReducers({
  categories,
  sources,
  articles
});
