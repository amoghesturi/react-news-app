import React from 'react';
import PropTypes from 'prop-types';

import Li from './Li.js'

class Categories extends React.Component {
  render() {
    let list = this.props.list.slice(0);

    let p = list.map( (l) => {
      let selected = this.props.selected ? 'selected' : '';
      return <Li key={l.id}
        selected={selected}
        id={l.id}
        value={l.name}
        handleOnClick={this.props.handleOnClick}></Li>
    });
    return (
      <ul className="categories">
        {p}
      </ul>
    )
  }
}

Categories.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string,
  handleOnClick: PropTypes.func,
  type: PropTypes.oneOf(['categories', 'sources'])
}

export default Categories;
