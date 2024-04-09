import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Communication = () => {
  return (
    <div className="px-8 sm:px-16 flex flex-col pt-[60px] sm:pt-[100px]">
      <div className="">
        <h2 className="font-bold text-2xl sm:text-4xl capitalize text-global leading-[80%]">
          Communicate Through
        </h2>
        <div className="divider my-[30px]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
        <div className="flex gap-2 group">
          <div className="flex items-center justify-center bg-global w-[80px] h-[80px]">
            <PhoneIcon
              sx={{ color: "white", fontSize: "40px" }}
              className="transition-transform duration-200 ease-in-out group-hover:animate-shake"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl sm:text-2xl">Phone</h1>
            <Link
              to="tel:+8801403336242"
              className="focus:no-underline no-underline text-gray-700 font-medium text-sm "
            >
              +8801403336242
            </Link>
            <Link
              to="tel:+8801628339104"
              className="focus:no-underline no-underline text-gray-700 font-medium text-sm"
            >
              +8801628339104
            </Link>
          </div>
        </div>

        <div className="flex gap-2 group">
          <div className="flex items-center justify-center bg-global w-[80px] h-[80px]">
            <EmailIcon
              sx={{ color: "white", fontSize: "40px" }}
              className="transition-transform duration-200 ease-in-out group-hover:animate-shake"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-xl sm:text-2xl">Email</h1>
            <Link
              to="mailto: ibrahimconstructionsltd@gmail.com"
              className="focus:no-underline no-underline text-gray-700 font-medium text-sm break-all"
            >
              ibrahimconstructionsltd@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex gap-2 group">
          <div className="flex items-center justify-center bg-global w-[80px] h-[80px]">
            <LocationOnIcon
              sx={{ color: "white", fontSize: "40px" }}
              className="transition-transform duration-200 ease-in-out group-hover:animate-shake"
            />
          </div>
          <Link
            target="_blank"
            to="https://www.google.com/maps/search/Road+%23+2,+Dag+%23+720,+Block+%23J+Baridhara,+South+Noyanogor+Vatara,+Dhaka/@23.7657308,90.4125482,17z?entry=ttu"
            className="flex xl:items-center flex-col focus:no-underline no-underline"
          >
            <span className="font-bold text-xl sm:text-2xl">
              Corporate Office:
            </span>
            <p className="text-gray-700 text-sm">
              Road # 2, Dag # 720, Block #J <br />
              Baridhara, South Noyanogor <br />
              Vatara, Dhaka
            </p>
          </Link>
        </div>

        <div className="flex gap-2 group">
          <div className="flex items-center justify-center bg-global w-[80px] h-[80px]">
            <LocationOnIcon
              sx={{ color: "white", fontSize: "40px" }}
              className="transition-transform duration-200 ease-in-out group-hover:animate-shake"
            />
          </div>
          <Link
            target="_blank"
            to="https://www.google.com/maps/search/H-390,+Malick+Market,+Locknat+Mondir+Road+Joydebpur+Bazar+Road/@24.0006132,90.415393,17z/data=!3m1!4b1?entry=ttu"
            className="flex xl:items-center flex-col focus:no-underline no-underline"
          >
            <span className="font-bold text-xl sm:text-2xl">Sales Office:</span>
            <p className="text-gray-700 text-sm">
              H-390, Malick Market, <br />
              Locknat Mondir Road <br />
              Joydebpur Bazar Road
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Communication;
