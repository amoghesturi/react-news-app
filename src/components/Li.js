import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-toolbox/lib/list';

class Li extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    e.target.id = this.props.id;
    this.props.handleOnClick(e);
  }

  render() {
    return (
      <ListItem
        className={this.props.selected}
        caption={this.props.value}
        onClick={this.handleOnClick} />
    );
  }
}

Li.propTypes = {
  selected: PropTypes.string,
  value: PropTypes.string,
  handleOnClick: PropTypes.func,
  id: PropTypes.string
}

export default Li;
