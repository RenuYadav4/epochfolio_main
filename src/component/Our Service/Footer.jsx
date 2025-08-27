import React from "react";
import logo from "../../assets/epochfolio.png";
import { IoMdCall, IoMdPlay } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { GoHorizontalRule } from "react-icons/go";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import map from "../../assets/map.png";
import { GrUploadOption } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <div className="px-6 mt-10 md:px-12 lg:px-20 flex flex-col md:flex-row md:flex-wrap md:justify-evenly gap-10 md:items-start overflow-x-hidden">
  {/* first */}
  <div className="flex flex-col gap-5 text-sm md:text-[14px] lg:text-lg max-w-sm">
    <div className="flex items-center gap-3">
      <div className="w-8 border-b-2 border-b-amber-600"></div>
      <p className="lg:text-sm">AVANTAGE</p>
    </div>
    <h2 className="mb-3 text-[#FF494B]">Headquarters</h2>
    <p className="max-w-xs">
      Organically grow holistic world view of dispute innovation via
      empowerment.
    </p>
    <div className="flex flex-col gap-3 my-6">
      <div className="flex gap-3 items-center">
        <IoMdCall />
        <span>90167 31145</span>
      </div>
      <div className="flex gap-3 items-center">
        <IoMail />
        <span>contact@epochfolio.com</span>
      </div>
      <div className="flex gap-3 items-center">
        <TbWorld />
        <span>www.epochfolio.com</span>
      </div>
    </div>
  </div>

  {/* second (map) */}
  <div className="flex flex-col items-center">
    <img
      src={map}
      alt="map"
      className="w-full max-w-md object-cover rounded"
    />
  </div>

  {/* third (locations) */}
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <FaLocationDot className="text-[#FF494B]" />
      <span>Maharashtra</span>
    </div>
    <div className="flex items-center gap-2">
      <FaLocationDot className="text-[#FF494B]" />
      <span>Delhi</span>
    </div>
    <div className="flex items-center gap-2">
      <FaLocationDot className="text-[#FF494B]" />
      <span>Haryana</span>
    </div>
  </div>

  {/* fourth (social links) */}
  <div className="flex flex-col gap-3 max-w-sm">
    <div className="flex items-center gap-2">
      <div className="w-8 border-b-2 border-b-amber-600"></div>
      <span>GET IN TOUCH</span>
    </div>
    <span className="text-[#FF494B] font-semibold">
      Advantage Social Links
    </span>
    <p className="text-xs lg:text-sm">
      Taking seamless key performance indicators offline to maximize the
      long tail
    </p>
    <div className="flex gap-3 flex-wrap">
  {/* <a 
    href="https://www.facebook.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={facebook} 
      alt="facebook" 
      className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" 
    />
  </a>

  <a 
    href="https://twitter.com/yourprofile" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={twitter} 
      alt="twitter" 
      className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" 
    />
  </a> */}

  <a 
    href="https://www.linkedin.com/company/epochfolio-pvt-ltd/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={linkedin} 
      alt="linkedin" 
      className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" 
    />
  </a>

  <a 
    href="https://www.instagram.com/epoch_folio/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={instagram} 
      alt="instagram" 
      className="w-10 h-10 sm:w-8 sm:h-8 md:w-12 md:h-12" 
    />
  </a>
</div>

  </div>
</div>

{/* final border */}
<div className="w-full mt-5 md:mt-10 text-[10px] md:text-sm lg:text-md p-4 lg:p-6 bg-[#ff494b] flex flex-col lg:flex-row items-center justify-between gap-4 text-white">
  <span>
    Copyright by{" "}
    <span className="font-semibold">Epochfolio</span>. All rights reserved
  </span>
  <div className="flex flex-wrap gap-4 items-center justify-center">
    <a href="#">HOME</a>
    <a href="#">ABOUT US</a>
    <a href="#">SERVICES</a>
    <a href="#">BLOG</a>
    <a href="#">CONTACT US</a>
    <GrUploadOption className="text-2xl lg:text-3xl" />
  </div>
</div>
    </div>
  );
};

export default Footer;
