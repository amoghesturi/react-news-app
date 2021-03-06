import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import AppBar from 'react-toolbox/lib/app_bar';

import Ul from './Ul.js';
import NewsList from './NewsList.js';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClickCategory = this.handleOnClickCategory.bind(this);
    this.handleOnClickSource = this.handleOnClickSource.bind(this);
  }

  handleOnClickCategory(e) {
    e.preventDefault();
    this.props.handleOnClickCategory(e.target.id);
  }

  handleOnClickSource(e) {
    e.preventDefault();
    this.props.handleOnClickSource(e.target.id);
  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div>
        <AppBar title="React News App" flat="true"/>
        {/* <h1 className="text-center">React News App</h1> */}
        <div className="container">
          {/* Categories */}
          <div className="categories">
            { this.props.categories.isFetching && <Spinner name="line-scale" color="steelblue" fadeIn="0"/> }
            { !this.props.categories.isFetching &&
              !this.props.categories.list.length &&
              <p>Empty...</p> }
            { !this.props.categories.isFetching &&
              this.props.categories.list.length &&
              <Ul list={this.props.categories.list}
                header="Categories"
                selected={this.props.categories.selected}
                handleOnClick={this.handleOnClickCategory}/>
            }
          </div>
          {/* Sources */}
          <div className="sources">
            { this.props.sources.isFetching && <Spinner name="line-scale" color="steelblue" fadeIn="0"/> }
            { (!this.props.sources.isFetching &&  this.props.sources.list.length) ?
              <Ul list={this.props.sources.list}
                header="Sources"
                selected={this.props.sources.selected}
                handleOnClick={this.handleOnClickSource} /> : null
             }
          </div>
          {/* Articles */}
          <div className="articles">
            { this.props.articles.isFetching && <Spinner name="line-scale" color="steelblue" fadeIn="0"/> }
            { (!this.props.articles.isFetching && this.props.articles.list.length ) ?
              <NewsList articles={this.props.articles.list}/> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  handleOnClickCategory: PropTypes.func.isRequired,
  handleOnClickSource: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.shape({
    list: PropTypes.array,
    isFetching: PropTypes.bool,
    selected: PropTypes.string,
    error: PropTypes.any,
  }),
  sources: PropTypes.shape({
    list: PropTypes.array,
    isFetching: PropTypes.bool,
    selected: PropTypes.string,
    error: PropTypes.any,
  }),
  articles: PropTypes.shape({
    list: PropTypes.array,
    isFetching: PropTypes.bool,
    error: PropTypes.any,
  }),
}

export default Home;
