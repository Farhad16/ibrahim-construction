import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "../../constance/menu";
import NavDrawer from "./NavDrawer";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<any>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="flex md:hidden gap-8 items-center fixed bg-white zIdx px-4 py-4 w-full justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="logo" className="w-16 h-16" />
          <span className="text-lg sm:text-xl capitalize text-global font-bold w-fit">
            Ibrahim Constructions ltd.
          </span>
        </Link>
        <div className="flex items-center justify-center min-w-[60px] ">
          <MenuIcon onClick={(e) => setOpen(true)} className="cursor-pointer" />
        </div>
      </div>
      <NavDrawer open={open} toggleDrawer={toggleDrawer} />

      <nav className="px-8 sm:px-16 text-black relative">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 md:h-[140px] py-4">
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/logo.png" alt="logo" className="w-20 h-20" />
              <span className="text-lg sm:text-xl capitalize text-global font-bold">
                Ibrahim Constructions ltd.
              </span>
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-2 lg:gap-4 flex-wrap">
            <div className="flex flex-row gap-1 items-center">
              <PhoneInTalkIcon
                sx={{ fontSize: 20, color: "#2f327b", fontWeight: "bold" }}
              />
              <span className="text-sm sm:text-base text-gray-600">
                +8801403336242
              </span>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <MailOutlineIcon
                sx={{ fontSize: 20, color: "#2f327b", fontWeight: "bold" }}
              />
              <span className="text-sm sm:text-base text-gray-600">
                ibrahimconstructionsltd@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* This is fixed menu */}
        <motion.div
          initial={{ width: scroll ? "100%" : "50%" }}
          animate={{ width: scroll ? "100%" : "50%" }}
          transition={{ duration: 0.5, easing: "easeOut" }}
          className={`hidden md:flex items-center min-h-[70px] absolute right-0 top-[80%] zIdx ${
            scroll
              ? "!fixed !top-0 w-full bg-white text-global scrollNav justify-between py-2"
              : "clip w-1/2 bg-global text-white justify-end"
          }`}
        >
          {scroll && (
            <Link to="/" className="flex items-center gap-2 pl-8 sm:pl-16">
              <img src="/assets/logo.png" alt="logo" className="w-16 h-16" />
              <span className="text-lg sm:text-xl capitalize text-global font-bold w-fit">
                Ibrahim Constructions ltd.
              </span>
            </Link>
          )}

          <div className="flex items-center gap-6 mr-[70px] text-base">
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
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
