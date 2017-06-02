import React from 'react';
import axios from 'axios';
var uniq = require('lodash.uniq');

import Ul from './Ul.js';
import NewsList from './NewsList.js';
import { capitalize } from '../helpers/utils.js'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSources: [],
      categories: [],
      sources: [],
      categorySelected: '',
      sourceSelected: '',
      articles: []
    }

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSourceClick = this.handleSourceClick.bind(this);
  }

  handleCategoryClick(e) {
    e.preventDefault();
    let categorySelected = e.target.id;
    let sources = getSourcesGivenCategory(this.state.allSources, categorySelected)

    this.setState({
      sources,
      categorySelected,
    });
  }

  handleSourceClick(e) {
    e.preventDefault();
    const sourceId = e.target.id;
    console.log(sourceId);
    const API_KEY = '21550f02cc33458a95ac12958f2881a0';

    let url = `https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${API_KEY}`;
    axios.get(url)
      .then( (response) => {
        this.setState({
          sourceSelected: sourceId,
          articles: response.data.articles
        })
      })
      .catch( (error) => {
        console.error(error);
      })
  }

  componentDidMount() {
    axios.get('https://newsapi.org/v1/sources')
      .then( (response) => {
        let cats = uniq(response.data.sources.map((cat) => cat.category));
        let newCategories = [];
        cats.forEach( (c) => {
          newCategories.push({
            id: c,
            name: capitalize(c)
          });
        });
        this.setState({
          allSources: response.data.sources,
          categories: newCategories,
        });
      })
      .catch( (error) => {
        console.error(error);
      })
  }

  render() {
    return (
      <div>
        <h1 className="text-center">React News App</h1>
        <div className="container">
          <div className="col-md-3">
            <Ul list={this.state.categories}
              selected={this.state.categorySelected}
              handleOnClick={this.handleCategoryClick}/>
          </div>
          <div className="col-md-3">
            <Ul list={this.state.sources}
              selected={this.state.sourceSelected}
              handleOnClick={this.handleSourceClick} />
          </div>
          <div className="col-md-6">
            <NewsList articles={this.state.articles}/>
          </div>
        </div>
      </div>
    );
  }
}

function getSourcesGivenCategory(sources, category) {
  let sourceCopy = sources.slice(0);
  let catSources = [];
  sourceCopy.forEach( (source) => {
    if(source.category === category) {
      catSources.push(source);
    }
  });

  return catSources;
}

export default Home;
