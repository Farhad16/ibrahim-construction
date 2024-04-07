import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
