import axios from 'axios';
import uniqWith from 'lodash.uniqwith';
import isEqual from 'lodash.isEqual';
import { capitalize } from '../helpers/utils.js';
import { getSources } from './sources';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVED_CATEGORIES = 'RECEIVED_CATEGORIES';
export const ERROR_CATEGORIES = 'ERROR_CATEGORIES';

const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  selected: category
})

const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

const errorCategories = (error) => ({
  type: ERROR_CATEGORIES,
  error: error
});

const receivedCategories = (categories) => ({
  type: RECEIVED_CATEGORIES,
  categories
});

export const onClickCategory = category => dispatch => {
  dispatch(selectCategory(category));
  return dispatch(getSources(category));
}

export const getCategories = () => dispatch => {
  dispatch(requestCategories());
  return axios.get('https://newsapi.org/v1/sources')
    .then( (response) => {
      return {
        categories: uniqWith(response.data.sources.map((cat) => ({ id: cat.category, name: capitalize(cat.category) })), isEqual )
      }
    })
    .then( ({categories }) => dispatch(receivedCategories(categories)) )
    .catch( (error) => dispatch(errorCategories(error)) )
}
