import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { withStore } from '../../store';
import { MenuIcon, ExitIcon } from '../../assets/icons/index';

const Navi = ({store}) => {
  const [show, setShow] = useState(false);
  const { theme } = store;

  const ToggleClass = () => {
    setShow(!show);
  };

  return (
    <div className="navi">
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
        <button onClick={() => theme.toggleTheme()}>{theme.theme}</button>
    </div>
  );
};

const NaviWithStore = withStore(Navi, 'theme');

export default NaviWithStore;
