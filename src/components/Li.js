import React from 'react';
import PropTypes from 'prop-types';

const Li = (props) => (
  <li className={props.selected}
    onClick={props.handleOnClick}
    id={props.id}>
    {props.value}
  </li>
)

Li.propTypes = {
  selected: PropTypes.string,
  value: PropTypes.string,
  handleOnClick: PropTypes.func,
  id: PropTypes.string
}

export default Li;
