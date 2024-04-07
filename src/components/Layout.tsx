import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="flex-grow bg-white sm:px-16 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
