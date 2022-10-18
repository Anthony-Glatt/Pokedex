import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const Card = ({
  // onClick,
  title
}) => {
  return (
  <div className="container">
    <div className="">
      <div>{title}</div>
    </div>
  </div>
  );
};

Card.propTypes = {
  // onClick: PropTypes.func,
  title: PropTypes.string,
};

Card.defaultProps = {
  // onClick: () => {},
  title: '',
};

export default Card;