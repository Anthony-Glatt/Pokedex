import React, { useState, useEffect } from "react";
import { withStore } from '../../store/index';
import Button from '../button';
import { NaviDesktop } from "./desktop";
import { NaviMobile } from './mobile';

/**
 * @function
 * @memberof components
 * @returns The rendered component
 */
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
      <Button onClick={() => theme.toggleTheme()}>{theme.theme}</Button>
    </div>
  );
};

const NaviWithStore = withStore(Navi, 'theme');

export default NaviWithStore;
