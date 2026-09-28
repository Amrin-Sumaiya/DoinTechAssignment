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
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#dfff3f]
        "
      />

      {/* =========================================================
          LEFT LIME DECORATION
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          left-[-20px]
          top-[169px]
          w-[112px]
          h-[43px]
          rounded-full
          bg-[#dfff3f]
          rotate-[10deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[-22px]
          top-[207px]
          w-[111px]
          h-[42px]
          rounded-full
          bg-[#dfff3f]
          rotate-[28deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[-51px]
          top-[249px]
          w-[108px]
          h-[41px]
          rounded-full
          bg-[#dfff3f]
          rotate-[28deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[-58px]
          top-[290px]
          w-[100px]
          h-[38px]
          rounded-full
          bg-[#dfff3f]
          rotate-[28deg]
        "
      />

      {/* =========================================================
          LEFT WHITE ABSTRACT STROKES
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          left-[123px]
          top-[299px]
          w-[48px]
          h-[15px]
          bg-white
          rounded-full
          rotate-[-18deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[130px]
          top-[316px]
          w-[54px]
          h-[15px]
          bg-white
          rounded-full
          rotate-[22deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[137px]
          top-[334px]
          w-[56px]
          h-[15px]
          bg-white
          rounded-full
          rotate-[-26deg]
        "
      />

      <div
        className="
          absolute
          z-30
          left-[143px]
          top-[352px]
          w-[52px]
          h-[15px]
          bg-white
          rounded-full
          rotate-[-38deg]
        "
      />

      {/* =========================================================
          RIGHT LIME DECORATION
      ========================================================== */}

      <div
        className="
          absolute
          z-20
          right-[-40px]
          top-[151px]
          w-[105px]
          h-[166px]
          bg-[#dfff3f]
          rounded-[28px]
          rotate-[-27deg]
        "
      />

      {/* =========================================================
          RIGHT WHITE TRIANGLE
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          right-[108px]
          top-[285px]
          w-0
          h-0
          border-l-[37px]
          border-r-[37px]
          border-b-[69px]
          border-l-transparent
          border-r-transparent
          border-b-white
          rotate-[13deg]
        "
      />

      {/* =========================================================
          LARGE LEFT WHITE OVAL
      ========================================================== */}

      <div
        className="
          absolute
          z-20
          left-[35px]
          top-[435px]
          w-[138px]
          h-[112px]
          bg-white
          rounded-[50%]
          rotate-[-20deg]
        "
      >
        <div
          className="
            absolute
            left-[38px]
            top-[29px]
            w-[64px]
            h-[46px]
            bg-[#243ed4]
            rounded-[50%]
            rotate-[12deg]
          "
        />
      </div>

      {/* =========================================================
          RIGHT WHITE ABSTRACT STROKES
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          right-[48px]
          top-[418px]
          rotate-[-12deg]
        "
      >
        <div className="w-[65px] h-[17px] bg-white rounded-full rotate-[-20deg]" />

        <div className="w-[73px] h-[17px] bg-white rounded-full mt-[1px] ml-[-6px] rotate-[21deg]" />

        <div className="w-[80px] h-[17px] bg-white rounded-full mt-[1px] ml-[-9px] rotate-[-20deg]" />

        <div className="w-[76px] h-[17px] bg-white rounded-full mt-[1px] ml-[-4px] rotate-[19deg]" />
      </div>

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
          h-[62px]
          rounded-[9px]
          bg-white
          shadow-lg
          px-[9px]
          py-[7px]
          text-black
        "
      >
        <p className="text-[15px] font-medium leading-none">
          UI/UX Design
        </p>

        <p className="text-[8px] text-gray-400 mt-[8px]">
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
          w-[149px]
          h-[95px]
          rounded-[9px]
          bg-white
          shadow-lg
          px-[10px]
          py-[9px]
          text-black
        "
      >
        <p className="text-[14px] text-gray-500">
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
          h-[111px]
          rounded-[10px]
          bg-white
          shadow-lg
          px-[19px]
          py-[8px]
          text-black
        "
      >
        <p className="text-[15px] font-medium">
          Happy Students
        </p>

        <p className="text-[6px] text-gray-400 mt-[2px]">
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
              h-[45px]
              rounded-full
              bg-[#dfff3f]
              flex
              items-center
              justify-center
              text-[6px]
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