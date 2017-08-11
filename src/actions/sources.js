import axios from 'axios';
import { getArticles } from './articles';

export const SELECT_SOURCE = 'SELECT_SOURCE';
export const REQUEST_SOURCES = 'REQUEST_SOURCES';
export const RECEIVED_SOURCES = 'RECEIVED_SOURCES';
export const ERROR_SOURCES = 'ERROR_SOURCES';

const selectSource = source => ({
  type: SELECT_SOURCE,
  selected: source
});

const requestSources = () => ({
  type: REQUEST_SOURCES
});

const errorSources = error => ({
  type: ERROR_SOURCES,
  error: error
});

const receivedSources = sources => ({
  type: RECEIVED_SOURCES,
  sources
});

export const onClickSource = source => dispatch => {
  dispatch(selectSource(source));
  return dispatch(getArticles(source));
}

export const getSources = (category) => dispatch => {
  dispatch(requestSources(category));
  return axios.get('https://newsapi.org/v1/sources')
    .then( (response) => response.data.sources.filter( (source) => source.category === category) )
    .then( (sources) => dispatch(receivedSources(sources)) )
    .catch( (error) => dispatch(errorSources(error)) )
}
