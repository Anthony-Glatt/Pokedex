import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const NaviDesktop = () => {
  return (
    <div className="navi-desktop">
        <div className="navi-desktop--list">
          <NavLink exact className={({ isActive }) => "link" + (isActive ? '--active' : '')} to='/'>Home</NavLink>
          <NavLink Link className={({ isActive }) => "link" + (isActive ? '--active' : '')} to='/pokemon'>Pokemon</NavLink>
        </div>
    </div>
  );
};
