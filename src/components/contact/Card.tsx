import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const Card = (props: any) => {
  const { name, designation, phone1, phone2, idx } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 + idx * 0.1, easing: "easeOut" }}
      className="flex flex-col border-2 border-gray-500 border-opacity-50 pt-4 sm:pt-6 bg-white"
    >
      <div className="flex justify-between items-center px-4 sm:px-6">
        <img src="/assets/circle-logo.png" alt="logo" className="w-14 h-14" />
        <div className="flex flex-col justify-end text-right">
          <p className="text-base text-global font-semibold leading-[87%]">
            {name}
          </p>
          <p className="text-sm">{designation}</p>
          <span className="text-xs text-gray-700">{phone1}</span>
          {phone2 && <span className="text-xs text-gray-700">{phone2}</span>}
        </div>
      </div>
      <h1 className="uppercase text-sm sm:text-base font-bold mt-6 px-4 sm:px-6">
        <span className="text-global text-base sm:text-2xl">IBRAHIM</span>{" "}
        Constructions ltd
      </h1>
      <div className="flex justify-between items-center gap-3 sm:gap-4 bg-gray-200 px-4 sm:px-6">
        <p className="text-xs">
          <span className="text-sm">Corporate Office:</span>
          <br />
          Road # 2, Dag # 720, Block #J <br />
          Baridhara, South Noyanogor <br />
          Vatara, Dhaka <br />
          <PhoneIcon sx={{ fontSize: 12, fontWeight: "bold" }} />
          +8801403336242
        </p>
        <p className="text-xs">
          <span className="text-sm">Sales Office:</span>
          <br />
          H-390, Malick Market, <br />
          Locknat Mondir Road <br />
          Joydebpur Bazar Road
          <br />
          <PhoneIcon sx={{ fontSize: 12, fontWeight: "bold" }} />
          +8801628339104
        </p>
      </div>
      <div className="flex justify-center items-center gap-1 bg-gray-300 px-4 sm:px-6 text-sm font-semibold">
        <EmailIcon sx={{ fontSize: 14, fontWeight: "bold" }} />
        <span>ibrahimconstructionsltd@gmail.com</span>
      </div>
    </motion.div>
  );
};

export default Card;
