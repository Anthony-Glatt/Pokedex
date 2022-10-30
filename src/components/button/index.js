import React from "react";
import PropTypes from 'prop-types';


/**
 * @function
 * @memberof components
 * @param {object} props The component's props
 * @param {object} props.id The button's id
 * @param {object} props.className The button's className
 * @param {object} props.children The button's children
 * @param {Function} props.onClick Function for button's onClick event 
 * @returns 
 */
const Button = ({
  id,
  className,
  children,
  onClick
}) => {
  return (
    <button
      id={id}
      className={className}
      type="button" onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.string,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: '',
  className: '',
  children: null,
  onClick: () => {},
};

export default Button;