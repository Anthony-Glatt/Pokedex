import React from "react";

const Button = (handleClick) => {
  return (
  <div>
    <button type="button" onClick={handleClick}>
      Search
    </button>
  </div>
  );
};

export default Button;