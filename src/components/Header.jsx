import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingBag } from "react-icons/fi";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Courses", link: "#courses" },
    { name: "Creators", link: "#creators" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-[#243ed4] text-white">
      <div className="max-w-7xl mx-auto px-6 h-[66px] flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center text-2xl font-bold gap-2">
          <img
            src={logo}
            alt="ByteSpace"
            className="h-8 w-auto object-contain"
          /> ByteSpace
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-[16px] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.link}
                className={`transition hover:text-[#dfff3f] ${
                  index === 0 ? "font-semibold" : "opacity-90"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Menu */}
        <div className="hidden md:flex items-center gap-5 text-[16px]">
<div className="relative group">
  <button className="hover:text-[#dfff3f] transition">
    Sign In
  </button>

  <div className="absolute right-0 top-full pt-3 hidden group-hover:block">
    <div className="w-36 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
      
      <Link
        to="/login"
        className="block px-5 py-3 hover:bg-lime-400 hover:text-white transition"
      >
        Login
      </Link>

      <Link
        to="/register"
        className="block px-5 py-3 hover:bg-lime-400 hover:text-white transition"
      >
        Register
      </Link>

    </div>
  </div>
</div>

          <a
            href="#join"
            className="hover:text-[#dfff3f] transition"
          >
            Join Us
          </a>

          <button
            aria-label="Shopping Bag"
            className="text-sm hover:text-[#dfff3f] transition"
          >
            <FiShoppingBag />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#243ed4] text-white">
          <ul className="flex flex-col items-center gap-6 py-7 text-sm">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-[#dfff3f] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#signin"
                onClick={() => setOpen(false)}
                className="hover:text-[#dfff3f]"
              >
                Sign In
              </a>
            </li>

            <li>
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="hover:text-[#dfff3f]"
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;