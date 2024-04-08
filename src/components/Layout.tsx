import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <div className="bg-white pt-[80px] sm:pt-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
