import React, { useEffect } from "react";
import { withStore } from '../../store/index';
import { NaviDesktop } from "./desktop";
import { NaviMobile } from './mobile';
// import { NaviDekstop } from './desktop';

export const Navi = ({store}) => {
  const { theme } = store;

  const innerWidth = window.innerWidth;

  useEffect(() => {
    
  }, [])
  return (
    <div>
      { (innerWidth < 650) ? <NaviMobile /> : <NaviDesktop />} 
      <button onClick={() => theme.toggleTheme()}>{theme.theme}</button>
    </div>
  );
};

const NaviWithStore = withStore(Navi, 'theme');

export default NaviWithStore;
