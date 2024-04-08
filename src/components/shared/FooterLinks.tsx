import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const icons = [
  {
    icon: <FacebookIcon />,
    link: "#",
  },
  {
    icon: <GoogleIcon />,
    link: "#",
  },
  {
    icon: <TwitterIcon />,
    link: "#",
  },
  {
    icon: <LinkedInIcon />,
    link: "#",
  },
];
const FooterLinks = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between w-full mt-4 gap-2 ${
        isMobile && "!justify-center"
      }`}
    >
      <div className="flex items-center gap-2">
        {icons.map((obj, idx) => (
          <Link key={idx} to={obj.link}>
            <div className="transition duration-300 hover:bg-opacity-30 group">
              {obj.icon}
            </div>
          </Link>
        ))}
      </div>
      {!isMobile && (
        <small className="text-xs">
          &#xA9;Copyright ibrahim constructions ltd {new Date().getFullYear()}
        </small>
      )}
    </div>
  );
};

export default FooterLinks;
