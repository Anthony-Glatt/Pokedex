import React from 'react';
import { NavLink } from 'react-router-dom';

const Navi = () => {
  return (
    <nav className="navi">
      <ul className="navi__list">
        <li className="navi__item">
          <NavLink to='/'>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
