import * as React from "react";

import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import { pages } from "../../constance/menu";
import CloseIcon from "@mui/icons-material/Close";
import FooterLinks from "./FooterLinks";

export default function NavDrawer({ open, toggleDrawer }: any) {
  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      anchor="right"
      className="relative"
    >
      <div className="flex flex-col gap-4 w-full h-full bg-black bg-opacity-80 text-white pt-12 justify-between">
        <nav className="flex flex-col gap-4 pl-8">
          {pages.map((page) => (
            <NavLink
              to={page.link}
              key={page.name}
              className={({ isActive }) =>
                `${
                  isActive ? "active" : ""
                } font-semibold focus:no-underline no-underline inline-block w-fit`
              }
            >
              {page.name}
            </NavLink>
          ))}
        </nav>
        <div className="mb-4">
          <FooterLinks isMobile={true} />
        </div>
      </div>

      <CloseIcon
        sx={{ color: "white" }}
        className="cursor-pointer absolute top-[5%] right-[15%]"
        onClick={toggleDrawer(false)}
      />
    </Drawer>
  );
}
