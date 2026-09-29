import React from "react";
import { FiCheck, FiStar } from "react-icons/fi";

import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import card1 from "../assets/card1.png";
import lime from "../assets/lime.png";

import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";

const AboutUs = () => {

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-br
        from-[#fffef4]
        via-white
        to-[#eef0ff]
        py-[65px]
        md:py-[75px]
      "
    >
      {/* BACKGROUND GLOW */}

<div
  className="
    absolute
    left-[-180px]
    top-[-120px]
    w-[650px]
    h-[520px]
    rounded-full
    bg-[#dfff3f]/35
    blur-[110px]
    pointer-events-none
  "
/>
{/* Bottom Left Lime Glow - Girl Area */}
<div
  className="
    absolute
    left-[-120px]
    bottom-[120px]
    w-[420px]
    h-[420px]
    rounded-full
    bg-[#dfff3f]/25
    blur-[100px]
    pointer-events-none
  "
/>

      <div
        className="
          absolute
          right-[-80px]
          bottom-[-40px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-[#dfe4ff]/70
          blur-[110px]
          pointer-events-none
        "
      />

      <div className="relative max-w-[1200px] mx-auto px-6">


        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            items-center
            gap-[45px]
            lg:gap-[65px]
          "
        >

          {/* LEFT CONTENT */}
          <div className="max-w-[500px]">

            <h2
              className="
                text-[#101124]
                text-[38px]
                md:text-[42px]
                leading-[1.15]
                font-bold             
              "
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

     <p
              className="
                mt-[20px]
                max-w-[430px]
                text-[13px]
                md:text-[14px]
                leading-[1.7]
                text-[#777681]
              "
            >
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>

            {/* STATS */}
            <div className="mt-[23px] flex items-start gap-[35px]">

              <div>
                <h3 className="text-[35px] font-medium text-[#2450e8]">
                  12K
                </h3> 
                <p className="mt-[1px] text-[15px] text-[#777]">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-[35px] font-medium text-[#2450e8]">
                  70+
                </h3>
                <p className="mt-[1px] text-[15px] text-[#777]">
                  Courses
                </p>
              </div>  

              <div>
                <h3 className="text-[35px] font-medium text-[#2450e8]">
                  16
                </h3>
                <p className="mt-[1px] text-[15px] text-[#777]">
                  Creators
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className="
              relative
              h-[450px]
              md:h-[470px]
              flex
              items-center
              justify-center
            "
          >

            {/* Lime decorative squiggle */}
<img
  src={lime}
  alt=""
  className="
    absolute
    right-[25px]
    top-[-30px]
    z-30
    w-[205px]
    h-auto
    object-contain
    pointer-events-none
  "
/>

            {/* Course card */}
            <div
              className="
                absolute
                left-[-19px]
                top-[-32px]
                z-10
                w-[335px]
                rounded-[13px]
                border
                border-[#dddddd]
                bg-white
                p-[8px]
                shadow-sm
              "
            >
       <img
                src={card1}
                alt="Course"
                className="
                  w-full
                  h-[278px]
                  rounded-[9px]
                  object-cover
                "
              />

              <h4 className="mt-[7px] text-[18px] font-semibold text-[#222] truncate">
                Learn Figma from Basic
              </h4>

              <p className="text-[15px] text-[#3157df]">
                by purepearl studio
              </p>

              <div className="mt-[9px] flex items-center justify-between">
                <span className="text-[28px] font-bold text-[#1746e8]">
                  $25
                </span>

                <span className="text-[7px] text-[#888]">
                  /lifetime
                </span>
              </div>
            </div>

            {/* Boy */}
            <img
              src={boy}
              alt="Student"
              className="
                absolute
                z-20
                bottom-[15px]
                right-[25px]
                h-[400px]
                md:h-[470px]
                w-auto
                object-contain
                drop-shadow-[0_18px_20px_rgba(0,0,0,0.18)]
              "
            />

            {/* Learning Progress card */}
            <div
              className="
                absolute
                z-30
                right-[62px]
                top-[150px]
                w-[150px]
                h-[105px]
                rounded-[10px]
                bg-white
                px-[15px]
                py-[10px]
                shadow-[0_8px_25px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-[15px] text-[#555]">
                Learning Progress
              </p>

              <div className="mt-[3px] text-[30px] font-bold text-[#252530]">
                55%
              </div>

              <div className="mt-[5px] h-[5px] w-full rounded-full bg-[#eeeeee]">
                <div className="h-full w-[55%] rounded-full bg-[#dfff3f]" />
              </div>
            </div>

          </div>
        </div>

<div
  className="
    mt-[35px]
    grid
    grid-cols-1
    lg:grid-cols-2
    items-center
    gap-[35px]
    lg:gap-[60px]
  "
>


  <div
    className="
      relative
      h-[450px]
      md:h-[470px]
      order-2
      lg:order-1
    "
  >

    <div
      className="
        absolute
        z-0
        left-[-40px]
        top-[20px]
        w-[180px]
        h-[110px]
        rounded-[9px]
        bg-[#2145df]
        px-[10px]
        py-[9px]
        text-white
        shadow-lg
      "
    >
      <p className="text-[18px]">
        Total Revenue
      </p>

      <p className="text-[10px] text-white/70">
        July 2024
      </p>

      <p className="mt-[4px] text-[18px] font-semibold">
        $120.29
      </p>

      <div className="mt-[5px] h-[3px] rounded-full bg-[#dfff3f]" />
    </div>


    {/* Year to Date */}
    <div
      className="
        absolute
        z-0
        left-[-45px]
        top-[165px]
        w-[120px]
        h-[130px]
        rounded-[9px]
        bg-[#2145df]
        px-[10px]
        py-[9px]
        text-white
        shadow-lg
      "
    >
      <p className="text-[16px]">
        Year to Date
      </p>

      <p className="text-[10px] text-white/70">
        2023
      </p>

      <p className="mt-[4px] text-[18px] font-semibold">
        $1,200.38
      </p>

      <span
        className="
          inline-block
          mt-[4px]
          rounded-full
          bg-[#dfff3f]
          px-[5px]
          py-[2px]
          text-[16px]
          text-[#222]
        "
      >
        +12$
      </span>
    </div>


    {/* Girl */}
    <img
      src={girl}
      alt="Creator"
      className="
        absolute
        z-10
        left-[-25px]
        bottom-[-80px]
        h-[360px]
        md:h-[580px]
        w-auto
        object-contain
        drop-shadow-[0_20px_20px_rgba(0,0,0,0.18)]
      "
    />


    {/* Lime Decoration */}
    <img
      src={lime}
      alt=""
      className="
        absolute
        z-20
        left-[225px]
        top-[65px]
        w-[200px]
        h-auto
        object-contain
        pointer-events-none
      "
    />


    {/* Happy Students */}
    <div
      className="
        absolute
        z-30
        right-[140px]
        bottom-[85px]
        w-[195px]
        rounded-[10px]
        bg-white
        px-[10px]
        py-[10px]
        shadow-[0_8px_25px_rgba(0,0,0,0.10)]
      "
    >

      <p className="text-[17px] text-black font-semibold">
        Happy Students
      </p>

      <div className="mt-[2px] flex items-center gap-[3px]">
        <span className="text-[17px] text-black font-semibold">
          4.5(240)
        </span>

        <span className="text-[19px] text-[#d5e584]">
          ★
        </span>
      </div>

      <div className="mt-[6px] flex items-center">

        <img
          src={man1}
          alt="Student"
          className="w-[24px] h-[24px] rounded-full object-cover border-2 border-white"
        />

        <img
          src={man2}
          alt="Student"
          className="w-[24px] h-[24px] rounded-full object-cover border-2 border-white -ml-[6px]"
        />

        <img
          src={man3}
          alt="Student"
          className="w-[24px] h-[24px] rounded-full object-cover border-2 border-white -ml-[6px]"
        />

        <img
          src={man4}
          alt="Student"
          className="w-[24px] h-[24px] rounded-full object-cover border-2 border-white -ml-[6px]"
        />

        <div
          className="
            ml-[-5px]
            w-[25px]
            h-[25px]
            rounded-full
            bg-[#dfff3f]
            border-2
            border-white
            flex
            items-center
            justify-center
            text-[6px]
            font-semibold
            text-[#222]
          "
        >
          2K+
        </div>

      </div>
    </div>

  </div>


  <div
    className="
      order-1
      lg:order-2
      max-w-[480px]
    "
  >

    <h2
      className="
        text-[#101124]
        text-[42px]
        md:text-[46px]
        leading-[1.15]
        font-bold
        tracking-[-1px]
      "
    >
      Create & Manage
      <br />
      Courses Easily.
    </h2>


    <p
      className="
        mt-[21px]
        text-[18px]
        md:text-[16px]
        leading-[1.7]
        text-[#777681]
        max-w-[420px]
      "
    >
      <span className="font-semibold text-[#222]">
        ByteSpace
      </span>{" "}
 supports individuals or entities in the creation, publication, and administration of educational courses. 
    </p>


    {/* Features */}

    <div className="mt-[22px] space-y-[10px]">

      <div className="flex items-center gap-[8px]">
        <div className="w-[16px] h-[18px] rounded-full bg-[#2145df] flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] text-white font-bold">
            ✓
          </span>
        </div>

        <span className="text-[18px] text-black font-medium">
          Share Your Expertise
        </span>
      </div>


      <div className="flex items-center gap-[8px]">
        <div className="w-[16px] h-[18px] rounded-full bg-[#2145df] flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] text-white font-bold">
            ✓
          </span>
        </div>

        <span className="text-[18px] text-black font-medium">
          Monetize Your Passion
        </span>
      </div>


      <div className="flex items-center gap-[8px]">
        <div className="w-[16px] h-[18px] rounded-full bg-[#2145df] flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] text-white font-bold">
            ✓
          </span>
        </div>

        <span className="text-[18px] text-black font-medium">
          Flexibility and Autonomy
        </span>
      </div>


      <div className="flex items-center gap-[8px]">
        <div className="w-[16px] h-[18px] rounded-full bg-[#2145df] flex items-center justify-center flex-shrink-0">
          <span className="text-[8px] text-white font-bold">
            ✓
          </span>
        </div>

        <span className="text-[18px] text-black font-medium">
          Build a Community
        </span>
      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
};

export default AboutUs;