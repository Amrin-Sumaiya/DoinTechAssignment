import React from "react";

import log1 from "../assets/log1.png";
import log2 from "../assets/log2.png";
import log3 from "../assets/log3.png";
import log4 from "../assets/log4.png";
import log5 from "../assets/log5.png";

const Packages = () => {
  const logos = [log1, log2, log3, log4, log5];

  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  return (
    <section className="w-full bg-white">

      {/* ================= LOGO SECTION ================= */}
      <div className="w-full bg-[#faf7f8]">
        <div
          className="
            max-w-[1120px]
            mx-auto
            px-6
            h-[200px]
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-full
              flex
              flex-wrap
              items-center
              justify-between
              gap-x-8
              gap-y-6
            "
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="
                  h-[42px]
                  w-auto
                  max-w-[170px]
                  object-contain
                  opacity-75
                "
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= DISCOVER SECTION ================= */}
      <div className="w-full bg-white">

        <div
          className="
            max-w-[1050px]
            mx-auto
            px-6
            pt-[72px]
            pb-[45px]
            text-center
          "
        >

          {/* Heading */}
          <h2
            className="
              max-w-[650px]
              mx-auto
              text-[#08091c]
              text-[36px]
              md:text-[44px]
              leading-[1.15]
              font-bold
              tracking-[-1.5px]
            "
          >
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          {/* Description */}
          <p
            className="
              max-w-[900px]
              mx-auto
              mt-[25px]
              text-[#92909a]
              text-[14px]
              md:text-[16px]
              leading-[1.8]
              font-normal
            "
          >
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="hidden md:block" />
            fields, from technology to the arts, and make a difference in your
            career and life.
          </p>

          {/* ================= CATEGORY BUTTONS ================= */}
          <div
            className="
              mt-[42px]
              flex
              flex-wrap
              items-center
              justify-center
              gap-[10px]
              max-w-[930px]
              mx-auto
            "
          >
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`
                  rounded-full
                  px-[17px]
                  py-[11px]
                  text-[14px]
                  leading-none
                  whitespace-nowrap
                  transition-all
                  duration-200
                  ${
                    index === 0
                      ? "bg-[#dfff3f] text-[#151515]"
                      : "bg-[#f8f5f6] text-[#4d4b54] hover:bg-[#dfff3f]"
                  }
                `}
              >
                {category}
              </button>
            ))}

            {/* More */}
            <button
              type="button"
              className="
                px-[7px]
                py-[11px]
                text-[14px]
                text-[#2446d8]
                whitespace-nowrap
                hover:text-[#1733b5]
                transition
              "
            >
              + More
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Packages;