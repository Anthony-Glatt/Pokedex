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
          <ul>
            <li>
              <NavLink exact className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink Link className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/pokemon'>Pokemon</NavLink>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Navi;
