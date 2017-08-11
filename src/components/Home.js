import React from 'react';
import PropTypes from 'prop-types';

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
    console.log(this.props);
    return (
      <div>
        <h1 className="text-center">React News App</h1>
        <div className="container">
          {/* Categories */}
          <div className="col-md-2">
            { this.props.categories.isFetching && <p>Loading...</p> }
            { !this.props.categories.isFetching &&
              !this.props.categories.list.length &&
              <p>Empty...</p> }
            { !this.props.categories.isFetching &&
              this.props.categories.list.length &&
              <Ul list={this.props.categories.list}
                selected={this.props.categories.selected}
                handleOnClick={this.handleOnClickCategory}/>
            }
          </div>
          {/* Sources */}
          <div className="col-md-2">
            { this.props.sources.isFetching && <p>Loading...</p> }
            { (!this.props.sources.isFetching &&  this.props.sources.list.length) ?
              <Ul list={this.props.sources.list}
                selected={this.props.sources.selected}
                handleOnClick={this.handleOnClickSource} /> : null
             }
          </div>
          {/* Articles */}
          <div className="col-md-8">
            { this.props.articles.isFetching && <p>Loading...</p> }
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
