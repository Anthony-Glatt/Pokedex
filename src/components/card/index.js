import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

/**
 * @function
 * @memberof components
 * @returns The rendered component
 */
const Card = ({
  className,
  onClick,
  title
}) => {
  return (
  <div className={`card--${className}`} onClick={onClick}>
    <div className="">
      <div>{title}</div>
    </div>
  </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

Card.defaultProps = {
  className: '',
  onClick: () => {},
  title: '',
};

export default Card;
