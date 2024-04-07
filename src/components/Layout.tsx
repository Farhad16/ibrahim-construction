import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow bg-white sm:px-16 px-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
