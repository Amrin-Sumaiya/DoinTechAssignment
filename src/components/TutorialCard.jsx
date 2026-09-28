import React from "react";
import { FiBarChart2, FiStar } from "react-icons/fi";

import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";

const courses = [
  {
    title: "Learn Figma from Basic",
    image: card1,
  },
  {
    title: "Build Digital Asset",
    image: card2,
  },
  {
    title: "the Power of Big Data",
    image: card3,
  },
  {
    title: "Balancing Productivity and Focus",
    image: card4,
  },
  {
    title: "Mastering Money Management",
    image: card5,
  },
  {
    title: "From Idea to Startup Success",
    image: card6,
  },
];

const avatars = [man1, man2, man3, man4];

const TutorialCard = () => {
  return (
    <section
      id="courses"
      className="w-full bg-white py-[55px] md:py-[75px]"
    >
      <div className="max-w-[1060px] mx-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[34px] gap-y-[36px]">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
                w-full
                rounded-[20px]
                border
                border-[#d9d9d9]
                bg-white
                p-[10px]
                transition
                duration-300
                hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-[172px] overflow-hidden rounded-[13px]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-300
                    hover:scale-[1.03]
                  "
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[65px] bg-gradient-to-t from-black/35 to-transparent" />

                {/* Image badges */}
                <div
                  className="
                    absolute
                    bottom-[16px]
                    left-[10px]
                    right-[10px]
                    flex
                    items-center
                    justify-between
                    gap-2
                  "
                >
                  <span className="rounded-full bg-white/90 px-[11px] py-[5px] text-[10px] text-[#555] whitespace-nowrap">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-white/90 px-[11px] py-[5px] text-[10px] text-[#555] whitespace-nowrap">
                    2 hours 16 mins
                  </span>

                  <span className="rounded-full bg-white/90 px-[11px] py-[5px] text-[10px] text-[#555] whitespace-nowrap">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* TITLE + RATING */}
              <div className="mt-[17px] flex items-center justify-between gap-2">
                <h3
                  className="
                    min-w-0
                    truncate
                    text-[17px]
                    leading-[1.1]
                    font-semibold
                    tracking-[-0.4px]
                    text-[#111111]
                  "
                >
                  {course.title}
                </h3>

                <div className="flex items-center gap-[4px] shrink-0">
                  <span className="text-[14px] text-[#555]">
                    4.5
                  </span>

                  <FiStar
                    size={16}
                    className="text-[#cfcfd4]"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* CREATOR */}
              <p className="mt-[3px] text-[10px] text-[#777]">
                by{" "}
                <span className="text-[#3157df]">
                  purepearl studio
                </span>
              </p>

              {/* LEVEL + AVATARS */}
              <div className="mt-[14px] flex items-center justify-between">

                <div
                  className="
                    flex
                    items-center
                    gap-[6px]
                    rounded-full
                    bg-[#f7f4f5]
                    px-[12px]
                    py-[7px]
                  "
                >
                  <FiBarChart2
                    size={15}
                    className="text-[#555]"
                  />

                  <span className="text-[10px] text-[#555]">
                    Beginner
                  </span>
                </div>

                <div className="flex items-center">
                  {avatars.map((avatar, avatarIndex) => (
                    <img
                      key={avatarIndex}
                      src={avatar}
                      alt="Student"
                      className="
                        w-[27px]
                        h-[27px]
                        rounded-full
                        object-cover
                        border-[2px]
                        border-white
                        -ml-[6px]
                      "
                      style={{
                        marginLeft:
                          avatarIndex === 0 ? "0px" : "-6px",
                      }}
                    />
                  ))}

                  <div
                    className="
                      ml-[-4px]
                      w-[29px]
                      h-[29px]
                      rounded-full
                      bg-[#dfff3f]
                      border-[2px]
                      border-white
                      flex
                      items-center
                      justify-center
                      text-[9px]
                      font-medium
                      text-[#333]
                    "
                  >
                    26+
                  </div>
                </div>
              </div>

              {/* PRICE */}
              <div className="mt-[14px] flex items-baseline">
                <span className="text-[18px] font-bold text-[#1746e8]">
                  $25
                </span>

                <span className="ml-[2px] text-[9px] text-[#777]">
                  /lifetime
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TutorialCard;