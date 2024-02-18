import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Componets/shared/Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
