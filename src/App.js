import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Home from './components/Home.js'
import Article from './components/Article.js'

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={Home} />
      </Router>
    );
  }
}
export default App;
