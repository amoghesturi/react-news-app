import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Home from './containers/home'
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

const App = () => (
  <Provider store={store}>
    
    <Home />
  </Provider>
);
export default App;
