import React from "react";
import { FiBarChart2, FiStar } from "react-icons/fi";

// =========================================================
// LOGO
// =========================================================
import logo from "../assets/logo.png";

// =========================================================
// COURSE IMAGES
// =========================================================
import card3 from "../assets/card3.png";
import card4 from "../assets/card2.png";

// =========================================================
// STUDENT IMAGES
// =========================================================
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";
import man7 from "../assets/man7.png";

// =========================================================
// DECORATIVE SHAPES
// =========================================================
import olime from "../assets/olime.png";
import freentrinagle from "../assets/trinaglegreen.png";
import whitelime from "../assets/whitelime.png";


const RegisterPage = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        overflow-hidden
        bg-[#243ed4]
        text-white
      "
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
              rgba(255,255,255,0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "73px 73px",
        }}
      />


      {/* =========================================================
          LOGO
          Raw green logo removed.
          Using logo.png instead.
      ========================================================== */}
      <img
        src={logo}
        alt="ByteSpace"
        className="
          absolute
          z-30
          left-[89px]
          top-[20px]
          w-[25px]
          h-[25px]
          object-contain
        "
      />


      {/* =========================================================
          LEFT INTRO TEXT
      ========================================================== */}
      <div
        className="
          absolute
          z-20
          left-[90px]
          top-[89px]
          w-[380px]
        "
      >

        <h2
          className="
            text-[15px]
            font-semibold
            leading-[1.2]
          "
        >
          Sign up and come in
        </h2>

        <p
          className="
            mt-[14px]
            text-[12px]
            leading-[1.55]
            text-white/80
          "
        >
          The registration process is straightforward, uncomplicated,
          <br />
          and efficient, allowing users to sign up quickly, easily, and at
          <br />
          no cost.
        </p>

      </div>


      {/* =========================================================
          =========================================================
          BACK COURSE CARD
          BUILD DIGITAL ASSET
          =========================================================
      ========================================================== */}

      <div
        className="
          absolute
          z-0
          left-[99px]
          top-[244px]
          w-[300px]
          rounded-[20px]
          border
          border-[#d9d9d9]
          bg-white
          p-[10px]
          text-black
        "
      >

        {/* =====================================================
            COURSE IMAGE
        ====================================================== */}
        <div
          className="
            relative
            w-full
            h-[200px]
            overflow-hidden
            rounded-[13px]
          "
        >

          <img
            src={card4}
            alt="Build Digital Asset"
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* Bottom gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[65px]
              bg-gradient-to-t
              from-black/35
              to-transparent
            "
          />

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
              gap-1
            "
          >

            <span
              className="
                rounded-full
                bg-white/90
                px-[8px]
                py-[5px]
                text-[8px]
                text-[#555]
                whitespace-nowrap
              "
            >
              17 Lessons
            </span>

            <span
              className="
                rounded-full
                bg-white/90
                px-[8px]
                py-[5px]
                text-[8px]
                text-[#555]
                whitespace-nowrap
              "
            >
              2 hours 16 mins
            </span>

            <span
              className="
                rounded-full
                bg-white/90
                px-[8px]
                py-[5px]
                text-[8px]
                text-[#555]
                whitespace-nowrap
              "
            >
              59 Comments
            </span>

          </div>

        </div>


        {/* =====================================================
            TITLE + RATING
        ====================================================== */}
        <div
          className="
            mt-[14px]
            flex
            items-center
            justify-between
            gap-2
          "
        >

          <h3
            className="
              min-w-0
              truncate
              text-[18px]
              leading-[1.1]
              font-semibold
              tracking-[-0.4px]
            "
          >
            Build Digital Asset
          </h3>

          <div
            className="
              flex
              items-center
              gap-[3px]
              shrink-0
            "
          >

            <span className="text-[13px] text-[#555]">
              4.5
            </span>

            <FiStar
              size={15}
              className="text-[#dfff3f]"
              fill="currentColor"
            />

          </div>

        </div>


        {/* =====================================================
            CREATOR
        ====================================================== */}
        <p className="mt-[3px] text-[9px] text-[#777]">
          by{" "}
          <span className="text-[#3157df]">
            purepearl studio
          </span>
        </p>


        {/* =====================================================
            LEVEL + AVATARS
        ====================================================== */}
        <div
          className="
            mt-[12px]
            flex
            items-center
            justify-between
          "
        >

          {/* Beginner */}
          <div
            className="
              flex
              items-center
              gap-[5px]
              rounded-full
              bg-[#f7f4f5]
              px-[10px]
              py-[6px]
            "
          >

            <FiBarChart2
              size={13}
              className="text-[#555]"
            />

            <span className="text-[9px] text-[#555]">
              Beginner
            </span>

          </div>


          {/* Student avatars */}
          <div className="flex items-center">

            <img
              src={man1}
              alt=""
              className="
                w-[27px]
                h-[27px]
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
                w-[27px]
                h-[27px]
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
                w-[27px]
                h-[27px]
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
                w-[27px]
                h-[27px]
                rounded-full
                object-cover
                border-2
                border-white
                -ml-[6px]
              "
            />

            <div
              className="
                ml-[-5px]
                w-[29px]
                h-[29px]
                rounded-full
                bg-black
                border-2
                border-white
                flex
                items-center
                justify-center
                text-[8px]
                font-medium
                text-white
              "
            >
              26+
            </div>

          </div>

        </div>


        {/* =====================================================
            PRICE
        ====================================================== */}
        <div className="mt-[12px] flex items-baseline">

          <span
            className="
              text-[19px]
              font-bold
              text-[#1746e8]
            "
          >
            $25
          </span>

          <span
            className="
              ml-[2px]
              text-[9px]
              text-[#777]
            "
          >
            /lifetime
          </span>

        </div>

      </div>


      {/* =========================================================
          =========================================================
          FRONT COURSE CARD
          THE POWER OF BIG DATA
          =========================================================
      ========================================================== */}

      <div
        className="
          absolute
          z-30
          left-[192px]
          top-[120px]
          w-[380px]
          rounded-[20px]
          border
          border-[#d9d9d9]
          bg-white
          p-[10px]
          text-black
        "
      >

        {/* =====================================================
            COURSE IMAGE
        ====================================================== */}
        <div
          className="
            relative
            w-full
            h-[210px]
            overflow-hidden
            rounded-[13px]
          "
        >

          <img
            src={card3}
            alt="The Power of Big Data"
            className="
              w-full
              h-full
              object-cover
            "
          />

          {/* Bottom gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-[65px]
              bg-gradient-to-t
              from-black/35
              to-transparent
            "
          />

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
              gap-1
            "
          >

            <span
              className="
                rounded-full
                bg-white/90
                px-[10px]
                py-[5px]
                text-[9px]
                text-[#555]
                whitespace-nowrap
              "
            >
              17 Lessons
            </span>

            <span
              className="
                rounded-full
                bg-white/90
                px-[10px]
                py-[5px]
                text-[9px]
                text-[#555]
                whitespace-nowrap
              "
            >
              2 hours 16 mins
            </span>

            <span
              className="
                rounded-full
                bg-white/90
                px-[10px]
                py-[5px]
                text-[9px]
                text-[#555]
                whitespace-nowrap
              "
            >
              59 Comments
            </span>

          </div>

        </div>


        {/* =====================================================
            TITLE + RATING
        ====================================================== */}
        <div
          className="
            mt-[16px]
            flex
            items-center
            justify-between
            gap-2
          "
        >

          <h3
            className="
              min-w-0
              truncate
              text-[19px]
              leading-[1.1]
              font-semibold
              tracking-[-0.5px]
            "
          >
            the Power of Big Data
          </h3>

          <div
            className="
              flex
              items-center
              gap-[4px]
              shrink-0
            "
          >

            <span className="text-[16px] text-[#555]">
              4.5
            </span>

            <FiStar
              size={18}
              className="text-[#dfff3f]"
              fill="currentColor"
            />

          </div>

        </div>


        {/* =====================================================
            CREATOR
        ====================================================== */}
        <p className="mt-[3px] text-[10px] text-[#777]">
          by{" "}
          <span className="text-[#3157df]">
            purepearl studio
          </span>
        </p>


        {/* =====================================================
            LEVEL + AVATARS
        ====================================================== */}
        <div
          className="
            mt-[14px]
            flex
            items-center
            justify-between
          "
        >

          {/* Beginner */}
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


          {/* Avatars */}
          <div className="flex items-center">

            <img
              src={man1}
              alt=""
              className="
                w-[30px]
                h-[30px]
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
                w-[30px]
                h-[30px]
                rounded-full
                object-cover
                border-2
                border-white
                -ml-[7px]
              "
            />

            <img
              src={man3}
              alt=""
              className="
                w-[30px]
                h-[30px]
                rounded-full
                object-cover
                border-2
                border-white
                -ml-[7px]
              "
            />

            <img
              src={man4}
              alt=""
              className="
                w-[30px]
                h-[30px]
                rounded-full
                object-cover
                border-2
                border-white
                -ml-[7px]
              "
            />

            <div
              className="
                ml-[-6px]
                w-[32px]
                h-[32px]
                rounded-full
                bg-black
                border-2
                border-white
                flex
                items-center
                justify-center
                text-[9px]
                font-medium
                text-white
              "
            >
              26+
            </div>

          </div>

        </div>


        {/* =====================================================
            PRICE
        ====================================================== */}
        <div
          className="
            mt-[15px]
            flex
            items-baseline
          "
        >

          <span
            className="
              text-[21px]
              font-bold
              text-[#1746e8]
            "
          >
            $25
          </span>

          <span
            className="
              ml-[2px]
              text-[10px]
              text-[#777]
            "
          >
            /lifetime
          </span>

        </div>

      </div>


      {/* =========================================================
          LIME OVAL
      ========================================================== */}
      <img
        src={olime}
        alt=""
        className="
          absolute
          z-40
          left-[80px]
          top-[91px]
          w-[108px]
          h-[102px]
          object-contain
          pointer-events-none
        "
      />


      {/* =========================================================
          WHITE SQUIGGLE
      ========================================================== */}
      <img
        src={whitelime}
        alt=""
        className="
          absolute
          z-50
          left-[423px]
          top-[419px]
          w-[125px]
          h-[135px]
          object-contain
          pointer-events-none
        "
      />


      {/* =========================================================
          GREEN TRIANGLE
      ========================================================== */}
      <img
        src={freentrinagle}
        alt=""
        className="
          absolute
          z-40
          left-[27px]
          top-[493px]
          w-[137px]
          h-[148px]
          object-contain
          pointer-events-none
        "
      />


      {/* =========================================================
          HAPPY STUDENTS CARD
      ========================================================== */}
      <div
        className="
          absolute
          z-50
          left-[268px]
          top-[511px]
          w-[274px]
          h-[130px]
          rounded-[13px]
          bg-[#dfff3f]
          text-black
          px-[17px]
          py-[14px]
          shadow-lg
        "
      >

        {/* Title */}
        <p
          className="
            text-[15px]
            font-medium
            leading-none
          "
        >
          Happy Students
        </p>


        {/* Rating */}
        <p
          className="
            mt-[5px]
            text-[9px]
            text-gray-700
          "
        >
          4.5 (240)

          <span className="ml-[2px] text-[#1746e8]">
            ★
          </span>
        </p>


        {/* Student avatars */}
        <div
          className="
            flex
            items-center
            mt-[8px]
          "
        >

          <img
            src={man1}
            alt=""
            className="
              w-[40px]
              h-[40px]
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
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          <img
            src={man3}
            alt=""
            className="
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          <img
            src={man4}
            alt=""
            className="
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          <img
            src={man5}
            alt=""
            className="
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          <img
            src={man6}
            alt=""
            className="
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          <img
            src={man7}
            alt=""
            className="
              w-[40px]
              h-[40px]
              rounded-full
              object-cover
              border-2
              border-white
              -ml-[7px]
            "
          />

          {/* 2K+ */}
          <div
            className="
              ml-[-7px]
              w-[43px]
              h-[43px]
              rounded-full
              bg-[#222]
              text-white
              border-2
              border-white
              flex
              items-center
              justify-center
              text-[10px]
              font-medium
            "
          >
            2K+
          </div>

        </div>

      </div>


      {/* =========================================================
          =========================================================
          REGISTER FORM
          =========================================================
      ========================================================== */}

      <div
        className="
          absolute
          z-40
          top-[88px]
          right-[94px]
          w-[465px]
          h-[630px]
          rounded-[18px]
          bg-white
          text-[#242424]
          shadow-xl
        "
      >

        <div
          className="
            px-[51px]
            pt-[54px]
          "
        >

          {/* Create account */}
          <p
            className="
              text-[13px]
              text-[#3155e8]
              font-medium
            "
          >
            Create an Account
          </p>


          {/* Main title */}
          <h1
            className="
              mt-[5px]
              text-[34px]
              leading-[1.14]
              font-bold
              tracking-[-1px]
            "
          >
            Welcome to
            <br />
            ByteSpace
          </h1>


          {/* =====================================================
              FULL NAME
          ====================================================== */}
          <div className="mt-[36px]">

            <label
              className="
                block
                text-[11px]
                font-medium
                text-[#333]
                mb-[7px]
              "
            >
              Full Name
            </label>

            <input
              type="text"
              placeholder="Jamie Davis"
              className="
                w-full
                h-[41px]
                rounded-[9px]
                border
                border-[#e4e4e4]
                px-[17px]
                text-[12px]
                text-gray-700
                outline-none
                focus:border-[#3155e8]
                transition
              "
            />

          </div>


          {/* =====================================================
              EMAIL
          ====================================================== */}
          <div className="mt-[20px]">

            <label
              className="
                block
                text-[11px]
                font-medium
                text-[#333]
                mb-[7px]
              "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="designer@example.com"
              className="
                w-full
                h-[41px]
                rounded-[9px]
                border
                border-[#e4e4e4]
                px-[17px]
                text-[12px]
                text-gray-700
                outline-none
                focus:border-[#3155e8]
                transition
              "
            />

          </div>


          {/* =====================================================
              PASSWORD
          ====================================================== */}
          <div className="mt-[20px]">

            <label
              className="
                block
                text-[11px]
                font-medium
                text-[#333]
                mb-[7px]
              "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="**********"
              className="
                w-full
                h-[41px]
                rounded-[9px]
                border
                border-[#e4e4e4]
                px-[17px]
                text-[12px]
                text-gray-700
                outline-none
                focus:border-[#3155e8]
                transition
              "
            />

          </div>


          {/* =====================================================
              CONTINUE BUTTON
          ====================================================== */}
          <div
            className="
              flex
              justify-end
              mt-[19px]
            "
          >

            <button
              type="button"
              className="
                h-[38px]
                px-[20px]
                rounded-full
                bg-[#dfff3f]
                text-black
                text-[13px]
                font-medium
                hover:bg-[#d2f331]
                transition
              "
            >
              Continue
            </button>

          </div>


          {/* =====================================================
              LOGIN
          ====================================================== */}
          <div
            className="
              absolute
              bottom-[43px]
              left-0
              w-full
              text-center
            "
          >

            <p
              className="
                text-[11px]
                text-gray-500
              "
            >
              Already have an account?

              <span
                className="
                  ml-[4px]
                  text-[#3155e8]
                  cursor-pointer
                "
              >
                Login
              </span>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RegisterPage;