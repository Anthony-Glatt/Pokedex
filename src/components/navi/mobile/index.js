import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { MenuIcon, ExitIcon } from '../../../assets/icons/index';

export const NaviMobile = () => {
  const [show, setShow] = useState(false);

  const ToggleClass = () => {
    setShow(!show);
  };

  return (
    <div className="navi-mobile">
      <div className={`dropbtn${show ? '--active' : ''}`} onclick={ToggleClass}>{show ? <ExitIcon /> : <MenuIcon />}</div>
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
