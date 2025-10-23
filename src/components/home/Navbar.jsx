"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import {
  IoLocationOutline,
  IoMailOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed z-50 top-0">
      {/* ===== Top Info Bar ===== */}
      <div className="bg-[#050A1E] text-white text-sm py-2 px-20 md:flex flex-row justify-between hidden">
        {/* Left Info */}
        <div className="flex flex-row gap-6 items-center">
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-[#FF3C00]" />
            <span>New market Sandigo - California</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMailOutline className="text-[#FF3C00]" />
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <IoTimeOutline className="text-[#FF3C00]" />
            <span>9.00 am - 5.00 pm</span>
          </div>
        </div>

        {/* Right Social Icons */}
        <div className="lg:flex justify-center items-center gap-3 hidden">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-1.5 bg-white text-black rounded-sm hover:bg-[#FF3C00] hover:text-white transition"
              >
                <Icon size={14} />
              </a>
            )
          )}
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <nav className="bg-white flex flex-wrap justify-between items-center px-6 py-4 shadow-md relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF3C00] to-[#FF7433] rounded-full"></div>
          <h1 className="text-2xl font-bold text-[#050A1E]">
            Solu<span className="text-[#FF3C00]">Tek</span>
          </h1>
        </div>

        {/* Menu Items */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-[#050A1E] font-medium px-6 md:px-0 py-4 md:py-0 transition-all duration-300 z-50 ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible md:opacity-100 md:visible"
          }`}
        >
          {["Home", "Company", "Portfolio", "Service", "Blog", "Contact"].map(
            (item, i) => (
              <li
                key={i}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF3C00] cursor-pointer flex items-center gap-1"
              >
                {item}
                {/* Only show arrow for specific items */}
                {["Home", "Company", "Service", "Blog"].includes(item) && (
                  <MdKeyboardArrowDown className="text-sm" />
                )}
              </li>
            )
          )}
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="p-2 bg-[#FFF2EE] rounded-md md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu size={20} className="text-[#FF3C00]" />
          </button>

          {/* Quote Button */}
          <button className="bg-[#FF3C00] hover:bg-[#e83700] text-white px-5 py-2 rounded-full font-semibold transition">
            GET A QUOTE NOW
          </button>
        </div>
      </nav>
    </header>
  );
}
