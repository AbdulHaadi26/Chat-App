import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = (props) => {
  const {
    type, placeholder, name, handleInput,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => handleInput(e.target.value)}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: 'Enter text',
};

export default Input;
