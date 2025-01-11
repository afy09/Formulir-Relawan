import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Foother = () => {
  return (
    <div className="mt-5">
      <hr />
      <div className="flex justify-center gap-3 mt-5 text-lg">
        <FaInstagram />
        <FaFacebook />
        <AiFillTikTok />
        <FaSquareXTwitter />
      </div>
      <div className="text-black text-xs md:text-sm text-center mt-3 ">
        Copyright © 2025 <span className="text-[#A31D1D]"> Prabowo Mania 08</span>. All Rights Reserved.
      </div>
    </div>
  );
};

export default Foother;
