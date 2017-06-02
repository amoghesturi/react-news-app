import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article.js';

class NewsList extends React.Component {
  render() {
    if(this.props.articles.length) {
      let newsArticles = this.props.articles.map( (article, i) => (
        <Article article={article} key={i}/>
      ));
      return (
        <div>
          {newsArticles}
        </div>
      );
    } else {
      return <p> No articles available </p>
    }
  }
}

NewsList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default NewsList;
