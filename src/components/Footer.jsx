import React from "react";
import { Link } from "@mui/material";
import github from "/github.png";
import twitter from "/twitter.png";
import linkedin from "/linkedin.png";
import behance from "/behance.png";

const Footer = () => {

  return (
    <div className="bg-purple mt-10 p-20 flex flex-col items-center">

      <div className="flex flex-row gap-10 mb-5">
        <Link href="https://github.com/itsJRillo">
          <img
            src={github}
            width={70}
            height={70}
            alt={`imagen github`}
          />
        </Link>
        <Link href="https://twitter.com/itsJrillo">
          <img
            src={twitter}
            width={70}
            height={70}
            alt={`imagen twitter`}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ismael-morillo/">
          <img
            src={linkedin}
            width={70}
            height={70}
            alt={`imagen linkedin`}
          />
        </Link>
        <Link href="https://www.behance.net/ismaelmorillo">
          <img
            src={behance}
            width={70}
            height={70}
            alt={`imagen behance`}
          />
        </Link>
      </div>
      <p className="text-xl text-white">This page is for practising purposes only. | Trash Taste Website 2022 </p>
    </div>
  );
};

export default Footer;
