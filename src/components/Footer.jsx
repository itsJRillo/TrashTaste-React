import React from "react";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-purple mt-10 p-20 flex flex-col items-center ">

      <div className="flex flex-row gap-10 mb-5">
        <Link href="https://github.com/itsJRillo">
          <img
            src="/img/github.png"
            width={40}
            height={40}
            alt={`imagen github`}
          />
        </Link>
        <Link href="https://twitter.com/itsJrillo">
          <img
            src="/img/twitter.png"
            width={40}
            height={40}
            alt={`imagen twitter`}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ismael-morillo/">
          <img
            src="/img/linkedin.png"
            width={40}
            height={40}
            alt={`imagen linkedin`}
          />
        </Link>
        <Link href="https://www.behance.net/ismaelmorillo">
          <img
            src="../img/behance.png"
            width={40}
            height={40}
            alt={`imagen behance`}
          />
        </Link>
      </div>
      <p className="text-xl text-white">This page is for practising purposes only. | Trash Taste Website 2022 </p>
    </div>
  );
};

export default Footer;
