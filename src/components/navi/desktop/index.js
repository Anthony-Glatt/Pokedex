import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const NaviDesktop = () => {
  return (
    <div className="navi-desktop">
        <div className>
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
