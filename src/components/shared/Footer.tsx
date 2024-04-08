import React from "react";
import { Divider } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import FooterLinks from "./FooterLinks";
import { pages } from "../../constance/menu";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className={"text-white flex items-center py-14 px-8 sm:px-16 bg-global"}
    >
      <div className="flex flex-col space-y-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="w-20 h-20 rounded-lg"
              />
            </Link>
            <span className="text-lg capitalize">
              Ibrahim Constructions ltd.
            </span>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <div className="flex flex-row gap-3 items-start">
              <LocationOnIcon sx={{ fontSize: "20px" }} />
              <p>
                Corporate Office: Road # 2, Dag # 720, Block #J Baridhara,
                <br /> South Noyanogor Vatara, Dhaka
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
            {pages.map((page, idx) => (
              <p key={page.name} className="cursor-pointer">
                {page.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Divider className="bg-white bg-opacity-50 w-full h-[2px] " />
          <FooterLinks />
          <small>@Copyright techzone {new Date().getFullYear()}</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
