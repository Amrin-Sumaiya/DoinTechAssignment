import React from "react";

import lime from "../assets/lime.png";
import trianglewhite from "../assets/trianglewhite.png";
import olime from "../assets/olime.png";
import whitelime from "../assets/whitelime.png";
import square from "../assets/square.png";
import trinaglegreen from "../assets/trinaglegreen.png";

const CreatorByte = () => {
  return (
    <section
      id="creator"
      className="
        relative
        min-h-[490px]
        w-full
        overflow-hidden
        bg-[#243ed4]
        py-[70px]
        md:py-[82px]
      "
    >
      {/* ================= GRID BACKGROUND ================= */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.22]
          pointer-events-none
          bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)]
          bg-[size:121px_121px]
        "
      />

      {/* ================= DECORATIONS ================= */}

      {/* Top Left Lime */}
      <img
        src={lime}
        alt=""
        className="
          absolute
          left-[-55px]
          top-[-35px]
          z-10
          w-[190px]
          md:w-[220px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Top Left White Squiggle */}
      <img
        src={whitelime}
        alt=""
        className="
          absolute
          left-[210px]
          top-[30px]
          z-10
          w-[105px]
          md:w-[125px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Top Right White Shape */}
      <img
        src={square}
        alt=""
        className="
          absolute
          right-[-45px]
          top-[70px]
          z-10
          w-[190px]
          md:w-[230px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Top Right Green Triangle */}
      <img
        src={trinaglegreen}
        alt=""
        className="
          absolute
          right-[205px]
          top-[20px]
          z-10
          w-[110px]
          md:w-[130px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Left White Triangle */}
      <img
        src={trianglewhite}
        alt=""
        className="
          absolute
          left-[-45px]
          top-[245px]
          z-10
          w-[135px]
          md:w-[155px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Bottom Left Lime */}
      <img
        src={olime}
        alt=""
        className="
          absolute
          left-[65px]
          bottom-[0px]
          z-10
          w-[245px]
          md:w-[280px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Right Lime */}
      <img
        src={olime}
        alt=""
        className="
          absolute
          right-[70px]
          bottom-[-85px]
          z-10
          w-[190px]
          md:w-[220px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* Small Square */}
      <img
        src={lime}
        alt=""
        className="
          absolute
          right-[150px]
          top-[320px]
          z-10
          w-[55px]
          md:w-[200px]
          h-auto
          object-contain
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTENT ================= */}
      <div
        className="
          relative
          z-20
          max-w-[1000px]
          mx-auto
          px-6
          text-center
        "
      >
        <h2
          className="
            mx-auto
            max-w-[720px]
            text-white
            text-[38px]
            md:text-[46px]
            lg:text-[48px]
            leading-[1.12]
            font-bold
            tracking-[-1.5px]
          "
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p
          className="
            mx-auto
            mt-[42px]
            max-w-[1000px]
            text-[14px]
            md:text-[16px]
            leading-[1.8]
            font-normal
            text-white/90
          "
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          className="
            mt-[38px]
            rounded-full
            bg-[#dfff3f]
            px-[27px]
            py-[13px]
            text-[15px]
            font-medium
            text-[#202020]
            transition
            hover:scale-[1.03]
            hover:bg-[#e8ff68]
          "
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};

export default CreatorByte;