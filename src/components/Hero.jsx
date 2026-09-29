import React from "react";
import { FiSearch } from "react-icons/fi";

import boy from "../assets/boy.png";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";
import man7 from "../assets/man7.png";


import lime from "../assets/lime.png";
import trianglewhite from "../assets/trianglewhite.png";
import olime from "../assets/olime2.png";
import whitelime from "../assets/whitelime.png";
import greensquare from "../assets/greensquare.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] max-h-[760px] overflow-hidden bg-[#243ed4] text-white"
    >
      {/* =========================================================
          GRID BACKGROUND
      ========================================================== */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "68px 68px",
        }}
      />

      {/* =========================================================
          TOP NAVBAR LINE
      ========================================================== */}
      <div className="absolute top-[68px] left-0 w-full h-px bg-white/10 z-10" />

      {/* =========================================================
          HEADING
      ========================================================== */}
      <div
        className="
          absolute
          z-20
          top-[101px]
          left-0
          w-full
          px-4
          text-center
        "
      >
        <h1
          className="
            font-bold
            tracking-[-1.8px]
            leading-[1.02]
            text-[40px]
            sm:text-[48px]
            md:text-[57px]
            lg:text-[61px]
          "
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        
      </div>
      

      {/* =========================================================
          DESCRIPTION
      ========================================================== */}
      <div
        className="
          absolute
          z-20
          top-[220px]
          left-0
          w-full
          px-4
          text-center
        "
      >
        <br />
        <p className="text-[9px] sm:text-[15px] text-white/75">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <br />
      </div>

      {/* =========================================================
          SEARCH BAR
      ========================================================== */}
      <div
        className="
          absolute
          z-50
          top-[290px]
          left-1/2
          -translate-x-1/2
          flex
          items-center gap-2
        "
      >
        {/* Input */}
        <div
          className="
            flex
            items-center
            w-[272px]
            sm:w-[340px]
            md:w-[370px]
            h-[38px]
            bg-white
            rounded-full
          "
        >
          
          <FiSearch className="ml-4 text-[16px] text-gray-400 flex-shrink-0" />

          <input
            type="text"
            placeholder="Course, topic, creator"
            className="
              flex-1
              h-full
              px-4
              bg-transparent
              outline-none
              text-[12px]
              text-gray-600
              placeholder:text-gray-400
            "
          />
        </div>

        {/* Search Button */}
        <button
          className="
            ml-[9px]
            h-[38px]
            px-[19px]
            rounded-full
            bg-[#dfff3f]
            text-black
            text-[12px]
            font-medium
            hover:bg-[#d2f331]
            transition
          "
        >
          Search
        </button>
      </div>

      {/* =========================================================
          LARGE LIME CIRCLE
      ========================================================== */}
      <div
        className="
          absolute
          z-10
          left-1/2
          -translate-x-1/2
          top-[343px]
          w-[750px]
          h-[750px]
          rounded-full
          bg-[#dfff3f]
        "
      />

      {/* =========================================================
          LEFT LIME DECORATION
      ========================================================== */}

<img
  src={lime}
  alt=""
  className="
    absolute
    z-30
    left-[-120px]
    top-[95px]
    w-[380px]
    h-[320px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          LEFT WHITE ABSTRACT STROKES
      ========================================================== */}
<img
  src={whitelime}
  alt=""
  className="
    absolute
    z-30
    left-[295px]
    top-[315px]
    w-[135px]
    h-[140px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          RIGHT LIME DECORATION
      ========================================================== */}

<img
  src={greensquare}
  alt=""
  className="
    absolute
    z-20
    right-[-40px]
    top-[155px]
    w-[190px]
    h-[285px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          RIGHT WHITE TRIANGLE
      ========================================================== */}

<img
  src={trianglewhite}
  alt=""
  className="
    absolute
    z-30
    right-[265px]
    top-[280px]
    w-[115px]
    h-[230px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          LARGE LEFT WHITE OVAL
      ========================================================== */}

<img
  src={olime}
  alt=""
  className="
    absolute
    z-20
    left-[30px]
    top-[425px]
    w-[290px]
    h-[290px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          RIGHT WHITE ABSTRACT STROKES
      ========================================================== */}

 <img
  src={whitelime}
  alt=""
  className="
    absolute
    z-30
    right-[35px]
    top-[530px]
    w-[295px]
    h-[265px]
    object-contain
    pointer-events-none
  "
/>

      {/* =========================================================
          MAIN BOY
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          left-1/2
          -translate-x-1/2
          top-[321px]
          h-[395px]
          sm:h-[425px]
          md:h-[455px]
        "
      >
        <img
          src={boy}
          alt="Course creator"
          className="h-full w-auto object-contain"
        />
      </div>

      {/* =========================================================
          UI/UX DESIGN CARD
      ========================================================== */}

      <div
        className="
          absolute
          z-50
          left-[33%]
          top-[420px]
          w-[170px]
          h-[72px]
          rounded-[9px]
          bg-white
          shadow-lg
          px-[9px]
          py-[7px]
          text-black
        "
      >
        <p className="text-[16px] font-medium leading-none">
          UI/UX Design
        </p>

        <p className="text-[10px] text-gray-400 mt-[8px]">
          20 Courses • 1000+ Students
        </p>
      </div>

      {/* =========================================================
          LEARNING PROGRESS CARD
      ========================================================== */}

      <div
        className="
          absolute
          z-50
          right-[33.5%]
          top-[435px]
          w-[159px]
          h-[100px]
          rounded-[9px]
          bg-white
          shadow-lg
          px-[10px]
          py-[9px]
          text-black
        "
      >
        <p className="text-[16px] text-gray-500">
          Learning Progress
        </p>

        <p className="text-[29px] font-bold leading-none mt-[5px]">
          55%
        </p>

        <div className="absolute left-[10px] right-[10px] bottom-[10px] h-[4px] rounded-full bg-gray-100 overflow-hidden">
          <div className="w-[55%] h-full bg-[#dfff3f] rounded-full" />
        </div>
      </div>

      {/* =========================================================
          HAPPY STUDENTS CARD
      ========================================================== */}

      <div
        className="
          absolute
          z-50
          left-[20.5%]
          top-[552px]
          w-[321px]
          h-[118px]
          rounded-[10px]
          bg-white
          shadow-lg
          px-[19px]
          py-[8px]
          text-black
        "
      >
        <p className="text-[18px] font-medium">
          Happy Students
        </p>

        <p className="text-[16px] text-gray-400 mt-[2px]">
          4.5 (240) ★
        </p>

        <div className="flex items-center mt-[2px]">

          <img
            src={man1}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
            "
          />

          <img
            src={man2}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />

          <img
            src={man3}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />

          <img
            src={man4}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />
                    <img
            src={man5}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />
         <img
            src={man6}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />

          <img
            src={man7}
            alt=""
            className="
              w-[42px]
              h-[42px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[6px]
            "
          />
          <div
            className="
             -ml-[6px]
              w-[45px]
              h-[42px]
              rounded-full
              bg-[#dfff3f]
              flex
              items-center
              justify-center
              text-[9px]
              font-bold
            "
          >
            2K+
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;