import { SELECT_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVED_CATEGORIES,
  ERROR_CATEGORIES } from '../actions/categories';

const categories = ( state = {
  list: [],
  selected: '',
  isFetching: true,
  error: null,
}, action ) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return selectCategory(state, action.selected);
    case REQUEST_CATEGORIES:
      return requestCategories(state);
    case RECEIVED_CATEGORIES:
      return receivedCategories(state, action.categories);
    case ERROR_CATEGORIES:
      return errorCategories(state, action.error)
    default:
      return state;
  }
}

const selectCategory = (state, category) => {
  return Object.assign( {}, state, { selected: category });
}

const requestCategories = (state) => {
  return Object.assign( {}, state, { isFetching: true });
}

const receivedCategories = (state, categories) => {
  return Object.assign( {}, state, { list: categories, isFetching: false });
}

const errorCategories =  (state, error) => {
  return Object.assign( {}, state, { isFetching: false, error})
}

export default categories;
