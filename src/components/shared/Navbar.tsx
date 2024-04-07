import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../constance/menu";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log("clicked");
    setOpen(newOpen);
  };

  return (
    <nav className="px-8 sm:px-16 text-black relative">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:h-[120px] py-4">
        <div className="flex gap-8 items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="logo" className="w-20 h-20" />{" "}
            <span className="text-lg sm:text-xl capitalize text-global font-bold">
              Ibrahim Constructions ltd.
            </span>
          </Link>
          <div className="block sm:hidden">
            <MenuIcon
              onClick={(e) => setOpen(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 lg:gap-4 flex-wrap">
          <div className="flex flex-row gap-1 items-center">
            <PhoneInTalkIcon
              sx={{ fontSize: 20, color: "#312d7f", fontWeight: "bold" }}
            />
            <span className="text-sm sm:text-base text-gray-600">
              +8801403336242
            </span>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <MailOutlineIcon
              sx={{ fontSize: 20, color: "#312d7f", fontWeight: "bold" }}
            />
            <span className="text-sm sm:text-base text-gray-600">
              ibrahimconstructionsltd@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end bg-global w-1/2 h-[70px] clip absolute right-0 -bottom-[35%]">
        <div className="flex items-center gap-6 mr-[70px] text-white text-base">
          {pages.map((page) => (
            <NavLink
              to={page.link}
              key={page.name}
              className={({ isActive }) =>
                `${
                  isActive ? "active" : ""
                } font-semibold focus:no-underline no-underline`
              }
            >
              {page.name}
            </NavLink>
          ))}
        </div>
      </div>
      <NavDrawer open={open} toggleDrawer={toggleDrawer} />
    </nav>
  );
};

export default Navbar;
