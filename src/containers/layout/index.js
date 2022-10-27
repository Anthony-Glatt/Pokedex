import React from "react";
import { Outlet } from "react-router-dom";
import NaviWithStore from 'src/components/navi';

const AppLayout = () => (
  <>
    <NaviWithStore />
    <Outlet />
  </>
);

export default AppLayout;
