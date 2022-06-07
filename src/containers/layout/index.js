import React from "react";
import { Outlet } from "react-router-dom";
import Navi from 'src/components/navi';

const AppLayout = () => (
  <>
    <Navi />
    <Outlet />
  </>
);

export default AppLayout;
