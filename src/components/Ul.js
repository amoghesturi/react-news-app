import React from 'react';
import PropTypes from 'prop-types';
import { List, ListSubHeader} from 'react-toolbox/lib/list';

import Li from './Li.js'

class Categories extends React.Component {
  render() {
    let list = [...this.props.list];

    let listItems = list.map( (item) => {
      let selected = (this.props.selected === item.id) ? 'selected' : '';
      return <Li key={item.id}
        selected={selected}
        id={item.id}
        value={item.name}
        handleOnClick={this.props.handleOnClick}></Li>
    });
    return (
      <List selectable ripple>
        <ListSubHeader caption={this.props.header} />
        { listItems }
      </List>
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
