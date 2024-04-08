import React from "react";
import { Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import { pages } from "../../constance/menu";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div
      className={
        "text-white flex flex-col items-center py-14 px-8 sm:px-16 bg-[#002448]"
      }
    >
      <div className="flex flex-wrap gap-8 justify-between w-full">
        <div className="flex flex-col gap-2 justify-start">
          <Link to="/" className="flex">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-20 h-20 rounded-lg"
            />
          </Link>
          <span className="capitalize">Ibrahim Constructions ltd.</span>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-row gap-3 items-start">
            <LocationOnIcon sx={{ fontSize: "20px" }} />
            <p>
              Corporate Office: Road # 2, Dag # 720, <br />
              Block #J Baridhara, South Noyanogor Vatara, Dhaka
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <PhoneIcon sx={{ fontSize: "20px" }} /> <p>+8801403336242</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <EmailIcon sx={{ fontSize: "20px" }} />{" "}
            <p>ibrahimconstructionsltd@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-row gap-3 items-start">
            <LocationOnIcon sx={{ fontSize: "20px" }} />
            <p>
              Sales Office: H-390, Malick Market, Locknat <br />
              Mondir Road Joydebpur Bazar Road
            </p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <PhoneIcon sx={{ fontSize: "20px" }} /> <p>+8801628339104</p>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <EmailIcon sx={{ fontSize: "20px" }} />{" "}
            <p>ibrahimconstructionsltd@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm w-fit">
          {pages.map((page) => (
            <Link
              to={page.link}
              key={page.name}
              className="cursor-pointer focus:no-underline no-underline"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-6 w-full">
        <Divider className="bg-white bg-opacity-50 w-full h-[2px]" />
        <FooterLinks />
      </div>
    </div>
  );
};

export default Footer;
