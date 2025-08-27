import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [valueselect, setValueselect] = useState(" ");

  const handlechange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
      setValueselect("");
    }
  };

  return (
    <div className="flex justify-between items-center my-4 ">
      <div>
        <img src={logo} alt="logo" className="w-60 h-20 object-cover" />
      </div>
      <div className="justify-between items-center hidden lg:flex">
        <ul className="flex space-x-12 text-xl font-semibold text-gray-800 ">
          <Link to="/">
            <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]">
              <div>Home</div>{" "}
              <div>
                <HiOutlineChevronDown />
              </div>
            </li>
          </Link>
          <Link to="/about-us">
            <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]">
              <div>About Us</div>{" "}
              <div>
                <HiOutlineChevronDown />
              </div>
            </li>
          </Link>
          <li className="relative group cursor-pointer flex items-center">
            <div className="flex gap-2 items-center">
              <span className="hover:text-[#ff7e56]">Service </span>
              <HiOutlineChevronDown />
            </div>


            <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-[200px] z-10">
              <li className="px-4 py-2 hover:bg-[#ff7e56] hover:text-white cursor-pointer">
                <a href="/our-service">Our Service</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff7e56] hover:text-white cursor-pointer">
                <a href="/solution">Solution</a>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff7e56] hover:text-white cursor-pointer">
                <a href="/reference">Reference</a>
              </li>
            </ul>
          </li>


          <Link to="/blog">
            <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]">
              <div>Blog</div>{" "}
              <div>
                <HiOutlineChevronDown />
              </div>
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer flex items-center gap-2 hover:text-[#ff7e56]">
              Contact Us
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex justify-between items-center gap-6 mr-2">
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer">
          <FaSearch />
        </div>
        <div className="bg-[#ff7e56] rounded-4xl p-2 text-2xl text-white cursor-pointer">
          <HiOutlineBars3BottomRight />
        </div>
      </div>
    </div>
  );
};

export default Layout;
