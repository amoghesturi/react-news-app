import { SELECT_SOURCE, REQUEST_SOURCES, RECEIVED_SOURCES, ERROR_SOURCES } from '../actions/sources';

const sources = (state = {
  list: [],
  selected: '',
  isFetching: false,
  error: null
}, action) => {
  switch (action.type) {
    case SELECT_SOURCE:
      return selectSource(state, action.selected);
    case REQUEST_SOURCES:
      return requestSources(state);
    case RECEIVED_SOURCES:
      return receivedSources(state, action.sources);
    case ERROR_SOURCES:
      return errorSources(state, action.error);
    default:
      return state;
  }
}

const selectSource = (state, source) => {
  return Object.assign( {}, state, { selected: source });
}

const requestSources = (state) => {
    return Object.assign( {}, state, { isFetching: true });
}

const receivedSources = (state, sources) => {
  return Object.assign( {}, state, { list: sources, isFetching: false });
}

const errorSources = (state, error) => {
  return Object.assign( {}, state, {isFetching: false, error})
}

export default sources;
