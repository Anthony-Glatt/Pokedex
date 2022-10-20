import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Navi = () => {
  const [show, setShow] = useState(false);

  const ToggleClass = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <button onclick={ToggleClass} className="dropbtn">Dropdown</button>
        <div className={show ? "show" : "noShow"}>
          <NavLink exact activeClassName="active" to='/'>Home</NavLink>
          <NavLink activeClassName="active" to='/pokemon'>Pokemon</NavLink>
        </div>
    </div>
  );
};

export default Navi;
