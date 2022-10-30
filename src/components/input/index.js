import React  from "react";
import PropTypes from 'prop-types';

/**
 * @function
 * @memberof components
 * @param {object} props The component's props
 * @param {object} props.id The input's id
 * @param {object} props.className The input's className
 * @param {object} props.label The text for the label
 * @param {string} props.name Name for the input's form control
 * @param {string} props.placeholder Placeholder text for the input
 * @param {Function} props.onChange Function for input's onChange event
 * @param {string} props.value Value for the input element
 * @returns 
 */
const Input = ({
  id,
  className,
  label,
  name,
  placeholder,
  onChange,
  value
}) => {
  return (
  <div className="container">
    {label && <label htmlFor={id}>{label}</label>}
    <input
      id={id}
      className={className}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type="text"
      value={value}
    />
  </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  id: '',
  className: '',
  label: '',
  name: '',
  placeholder: '',
  onChange: () => {},
  value: '',
};

export default Input;