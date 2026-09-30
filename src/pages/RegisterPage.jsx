import React from "react";
import { Link } from "react-router-dom";
import { FiBarChart2, FiStar } from "react-icons/fi";

import logo from "../assets/logo.png";

import card3 from "../assets/cardp.jpg";
import card4 from "../assets/card2.png";

import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";


import olime from "../assets/olime3.png";
import freentrinagle from "../assets/trinaglegreen.png";
import whitelime from "../assets/whitelime.png";

const RegisterPage = () => {
  return (
    <main className="min-h-[100dvh] w-full overflow-hidden bg-[#243ed4] text-white">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <section
        className="relative min-h-[100dvh] w-full"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "72px 72px",
        }}
      >

        {/* =======================================================
            MAIN DESKTOP CONTAINER

            This is the important part.

            Instead of using the browser width directly,
            the actual design is kept inside a controlled area.
        ======================================================== */}

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[100dvh]
            w-full
            max-w-[1400px]
            items-center
            justify-between
            px-8
            py-8

            xl:px-14
            2xl:px-16
          "
        >

          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div
            className="
              relative
              flex-1
              h-[620px]
              max-w-[720px]
            "
          >

            {/* ===================================================
                LOGO
            ==================================================== */}

            <Link
              to="/"
              className="
                absolute
                left-[12px]
                top-[-15px]
                z-50
              "
            >
              <img
                src={logo}
                alt="ByteSpace"
                className="
              
                  h-[43px]
                  w-[43px]
                  object-contain
                "
              />
            </Link>


            {/* ===================================================
                INTRO TEXT
            ==================================================== */}

            <div
              className="
                absolute
                left-3
                top-[52px]
                z-30
                w-[390px]
              "
            >

              <h2
                className="
                  text-[20px]
                  font-semibold
                  leading-[1.25]
                "
              >
                Sign up and come in
              </h2>

              <p
                className="
                  mt-2
                  max-w-[390px]
                  text-[13px]
                  leading-[1.65]
                  text-white/80
                "
              >
                The registration process is straightforward,
                uncomplicated, and efficient, allowing users
                to sign up quickly, easily, and at no cost.
              </p>

            </div>


            {/* ===================================================
                ARTWORK WRAPPER

                Everything on the left stays relative to this
                area instead of the browser itself.
            ==================================================== */}

            <div
              className="
                absolute
                left-[-15px]
                top-[165px]
                h-[430px]
                w-[620px]
              "
            >

              {/* =================================================
                  BACK CARD
              ================================================== */}

              <div
                className="
                  absolute
                  left-0
                  top-[55px]
                  z-10
                  w-[330px]
                  rounded-[20px]
                  border
                  border-[#dedede]
                  bg-white
                  p-[10px]
                  text-black
                  shadow-sm
                "
              >

                <div
                  className="
                    h-[190px]
                    overflow-hidden
                    rounded-[13px]
                  "
                >
                  <img
                    src={card4}
                    alt="Build Digital Asset"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-3">

                  <h3 className="text-[17px] font-semibold">
                    Build Digital Asset
                  </h3>

                  <p className="mt-1 text-[9px] text-gray-500">
                    by{" "}
                    <span className="text-[#3157df]">
                      purepearl studio
                    </span>
                  </p>

                  <div className="mt-3 flex items-center justify-between">

                    <div className="flex items-center gap-1 rounded-full bg-[#f7f4f5] px-3 py-1.5">

                      <FiBarChart2
                        size={12}
                        className="text-gray-500"
                      />

                      <span className="text-[9px] text-gray-500">
                        Beginner
                      </span>

                    </div>

                    <div className="flex items-center">

                      <img
                        src={man1}
                        className="h-7 w-7 rounded-full border-2 border-white object-cover"
                        alt=""
                      />

                      <img
                        src={man2}
                        className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white object-cover"
                        alt=""
                      />

                      <img
                        src={man3}
                        className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white object-cover"
                        alt=""
                      />

                      <div className="-ml-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-black text-[7px] text-white">
                        26+
                      </div>

                    </div>

                  </div>

                  <div className="mt-3">

                    <span className="text-[19px] font-bold text-[#1746e8]">
                      $25
                    </span>

                    <span className="ml-1 text-[9px] text-gray-500">
                      /lifetime
                    </span>

                  </div>

                </div>

              </div>


              {/* =================================================
                  FRONT CARD
              ================================================== */}

              <div
                className="
                  absolute
                  left-[105px]
                  top-[-25px]
                  z-30
                  w-[380px]
                  rounded-[20px]
                  border
                  border-[#dedede]
                  bg-white
                  p-[10px]
                  text-black
                  shadow-sm
                "
              >

                <div
                  className="
                    relative
                    h-[205px]
                    overflow-hidden
                    rounded-[13px]
                  "
                >

                  <img
                    src={card3}
                    alt="The Power of Big Data"
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-16
                      bg-gradient-to-t
                      from-black/40
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-3
                      right-3
                      gap-5
                      flex
                      items-center
            
                    "
                  >

                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] text-gray-600">
                      17 Lessons
                    </span>

                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] text-gray-600">
                      2 hours 16 mins
                    </span>

                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[8px] text-gray-600">
                      59 Comments
                    </span>

                  </div>

                </div>


                <div className="mt-4 flex items-center justify-between">

                  <h3 className="text-[19px] font-semibold">
                    the Power of Big Data
                  </h3>

                  <div className="flex items-center gap-1">

                    <span className="text-[15px] text-gray-500">
                      4.5
                    </span>

                    <FiStar
                      size={17}
                      className="text-[#dfff3f]"
                      fill="currentColor"
                    />

                  </div>

                </div>


                <p className="mt-1 text-[9px] text-gray-500">
                  by{" "}
                  <span className="text-[#3157df]">
                    purepearl studio
                  </span>
                </p>


                <div className="mt-3 flex items-center justify-between">

                  <div className="flex items-center gap-1.5 rounded-full bg-[#f7f4f5] px-3 py-1.5">

                    <FiBarChart2
                      size={13}
                      className="text-gray-500"
                    />

                    <span className="text-[9px] text-gray-500">
                      Beginner
                    </span>

                  </div>


                  <div className="flex items-center">

                    <img
                      src={man1}
                      className="h-7 w-7 rounded-full border-2 border-white object-cover"
                      alt=""
                    />

                    <img
                      src={man2}
                      className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white object-cover"
                      alt=""
                    />

                    <img
                      src={man3}
                      className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white object-cover"
                      alt=""
                    />

                    <img
                      src={man4}
                      className="-ml-1.5 h-7 w-7 rounded-full border-2 border-white object-cover"
                      alt=""
                    />

                    <div className="-ml-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-[8px] text-white">
                      26+
                    </div>

                  </div>

                </div>


                <div className="mt-3">

                  <span className="text-[21px] font-bold text-[#1746e8]">
                    $25
                  </span>

                  <span className="ml-1 text-[9px] text-gray-500">
                    /lifetime
                  </span>

                </div>

              </div>

              <img
                src={olime}
                alt=""
                className="
                  absolute
                  left-[15px]
                  top-[-40px]
                  z-40
                  h-[145px]
                  w-[145px]
                  object-contain
                "
              />

              <img
                src={whitelime}
                alt=""
                className="
                  absolute
                  left-[390px]
                  top-[275px]
                  z-50
                  h-[125px]
                  w-[115px]
                  object-contain
                "
              />


              <img
                src={freentrinagle}
                alt=""
                className="
                  absolute
                  left-[10px]
                  top-[335px]
                  z-40
                  h-[135px]
                  w-[125px]
                  object-contain
                "
              />

              <div
                className="
                  absolute
                  left-[230px]
                  top-[365px]
                  z-50
                  w-[270px]
                  rounded-[13px]
                  bg-[#dfff3f]
                  px-4
                  py-3
                  text-black
                  shadow-lg
                "
              >

                <p className="text-[14px] font-semibold">
                  Happy Students
                </p>

                <p className="mt-1 text-[8px] text-gray-700">
                  4.5 (240)
                  <span className="ml-1 text-[#1746e8]">
                    ★
                  </span>
                </p>

                <div className="mt-2 flex items-center">

                  <img
                    src={man1}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={man2}
                    alt=""
                    className="-ml-1.5 h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={man3}
                    alt=""
                    className="-ml-1.5 h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={man4}
                    alt=""
                    className="-ml-1.5 h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={man5}
                    alt=""
                    className="-ml-1.5 h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <img
                    src={man6}
                    alt=""
                    className="-ml-1.5 h-9 w-9 rounded-full border-2 border-white object-cover"
                  />

                  <div className="-ml-1.5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#222] text-[9px] text-white">
                    2K+
                  </div>

                </div>

              </div>

            </div>

          </div>


          <div
            className="
              relative
              z-40
              w-[410px]
              shrink-0
              rounded-[20px]
              bg-white
              text-[#242424]
              shadow-xl

              lg:w-[410px]
              xl:w-[430px]
              2xl:w-[450px]
            "
          >

            <div
              className="
                px-10
                pb-11
                pt-12

                xl:px-11
                xl:pt-13
              "
            >

              {/* Small heading */}

              <p className="text-[12px] font-medium text-[#3155e8]">
                Create an Account
              </p>


              {/* Heading */}

              <h1
                className="
                  mt-1
                  text-[32px]
                  font-bold
                  leading-[1.12]
                  tracking-[-1px]
                "
              >
                Welcome to
                <br />
                ByteSpace
              </h1>


              {/* Full name */}

              <div className="mt-8">

                <label className="mb-2 block text-[10px] font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className="
                    h-[43px]
                    w-full
                    rounded-[9px]
                    border
                    border-[#e2e2e2]
                    px-4
                    text-[11px]
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#3155e8]
                  "
                />

              </div>


              {/* Email */}

              <div className="mt-5">

                <label className="mb-2 block text-[10px] font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="designer@example.com"
                  className="
                    h-[43px]
                    w-full
                    rounded-[9px]
                    border
                    border-[#e2e2e2]
                    px-4
                    text-[11px]
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#3155e8]
                  "
                />

              </div>


              {/* Password */}

              <div className="mt-5">

                <label className="mb-2 block text-[10px] font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="**********"
                  className="
                    h-[43px]
                    w-full
                    rounded-[9px]
                    border
                    border-[#e2e2e2]
                    px-4
                    text-[11px]
                    text-gray-700
                    outline-none
                    transition
                    focus:border-[#3155e8]
                  "
                />

              </div>


              {/* Continue */}

              <div className="mt-5 flex justify-end">

                <button
                  type="button"
                  className="
                    rounded-full
                    bg-[#dfff3f]
                    px-5
                    py-2.5
                    text-[12px]
                    font-medium
                    text-black
                    transition
                    hover:bg-[#d3f333]
                  "
                >
                  Continue
                </button>

              </div>


              {/* Login */}

              <p className="mt-24 text-center text-[10px] text-gray-500">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="
                    text-[#3155e8]
                    hover:underline
                  "
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>


        <div
          className="
            hidden
            max-lg:block
          "
        />

      </section>

    </main>
  );
};

export default RegisterPage;