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
    <div className="flex items-center gap-2">
      {icons.map((obj, idx) => (
        <Link key={idx} to={obj.link}>
          <div className="transition duration-300 hover:bg-opacity-30 group">
            {obj.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
