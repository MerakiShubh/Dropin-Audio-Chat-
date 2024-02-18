import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/images/logo.png" alt="logo" />
        <span>Dropin</span>
      </Link>
    </nav>
  );
};

export default Navigation;
