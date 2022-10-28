import React, { useState, useEffect } from "react";
import { withStore } from '../../store/index';
import { NaviDesktop } from "./desktop";
import { NaviMobile } from './mobile';
// import { NaviDekstop } from './desktop';

export const Navi = ({store}) => {
  const { theme } = store;
  const [size, setSize] = useState();

  const resizeHandler = () => {
    const width = window.innerWidth;
    setSize(width);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div>
      { (size < 650) ? <NaviMobile /> : <NaviDesktop />} 
      <button onClick={() => theme.toggleTheme()}>{theme.theme}</button>
    </div>
  );
};

const NaviWithStore = withStore(Navi, 'theme');

export default NaviWithStore;
