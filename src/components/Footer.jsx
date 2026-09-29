import React from "react";
import logo from "../assets/logo.png";

const linkColumns = [
  [
    { name: "Featured Courses", link: "#featured-courses" },
    { name: "Featured Categories", link: "#featured-categories" },
    { name: "Business", link: "#business" },
    { name: "IT", link: "#it" },
    { name: "Design", link: "#design" },
  ],
  [
    { name: "Development", link: "#development" },
    { name: "Marketing", link: "#marketing" },
    { name: "Photography", link: "#photography" },
    { name: "Finance", link: "#finance" },
    { name: "Sport", link: "#sport" },
  ],
  [
    { name: "Become a Creator", link: "#creator" },
    { name: "Affiliate Program", link: "#affiliate" },
    { name: "Contact", link: "#contact" },
    { name: "Help", link: "#help" },
    { name: "About", link: "#about" },
  ],
];

const bottomLinks = [
  { name: "Privacy Policy", link: "#privacy" },
  { name: "Terms of Service", link: "#terms" },
  { name: "Cookies Settings", link: "#cookies" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#333333]">

      <div className="max-w-[1196px] mx-auto  pt-[60px]">

        <div className="flex flex-col md:flex-row justify-between">

          <div className="w-full md:w-[390px]">

            {/* Logo */}
<a
  href="#home"
  className="inline-flex items-center gap-[7px]"
>
  <img
    src={logo}
    alt="ByteSpace Logo"
    className="h-[45px] w-auto object-contain"
  />

  <span className="text-[25px] font-bold text-[#222222]">
    ByteSpace
  </span>
</a>

            {/* Newsletter text */}
            <p className="mt-[19px] text-[14px] leading-[1.2] text-[#444444]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Email + Search */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-[34px] flex items-center gap-[18px]"
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-[282px]
                  h-[45px]
                  rounded-full
                  border
                  border-[#d9d9d9]
                  bg-white
                  px-[17px]
                  text-[11px]
                  text-[#333333]
                  outline-none
                  placeholder:text-[#555555]
                  focus:border-[#bdbdbd]
                "
              />

              <button
                type="submit"
                className="
                  h-[45px]
                  min-w-[85px]
                  px-[19px]
                  rounded-full
                  bg-[#dfff3f]
                  text-[12px]
                  font-medium
                  text-[#222222]
                  transition
                  hover:brightness-95
                "
              >
                Search
              </button>

            </form>

            {/* Privacy text */}
            <p className="mt-[19px] max-w-[365px] text-[11px] leading-[1.45] text-[#555555]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>

          </div>

          <div className="mt-10 md:mt-[37px] grid grid-cols-3 gap-x-[58px]">

            {linkColumns.map((column, columnIndex) => (
              <ul
                key={columnIndex}
                className="flex flex-col gap-[15px] min-w-[100px]"
              >
                {column.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="
                        text-[15px]
                        leading-none
                        text-[#444444]
                        whitespace-nowrap
                        transition
                        hover:text-black
                      "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            ))}

          </div>

        </div>
        <div
          className="
            mt-[97px]
            border-t
            border-[#dddddd]
            pt-[17px] 
            pb-[35px]
            flex
            flex-col
            sm:flex-row
            items-start
            sm:items-center
            justify-between
            gap-4
          "
        >

          {/* Copyright */}
          <p className="text-[12px] text-[#555555]">
            @ {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          {/* Bottom links */}
          <div className="flex items-center gap-[20px]">

            {bottomLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="
                  text-[12px]
                  text-[#555555]
                  whitespace-nowrap
                  transition
                  hover:text-black
                "
              >
                {item.name}
              </a>
            ))}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;