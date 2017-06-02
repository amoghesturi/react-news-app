import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-8">
          <h2>{this.props.article.title}</h2>
          <h5>{this.props.article.description}</h5>
        </div>
        <div className="col-md-4">
          <img src={this.props.article.urlToImage} className="img-rounded img-responsive" alt="alt.png"/>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    url: PropTypes.string
  })
}

export default Article;
