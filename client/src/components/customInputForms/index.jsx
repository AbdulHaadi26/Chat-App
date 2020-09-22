import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = (props) => {
  const {
    type, placeholder, name, handleInput, value,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className="custom-input-form col-lg-8 col-12"
      onChange={(e) => handleInput(e)}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Enter text',
  value: '',
};

export default Input;
