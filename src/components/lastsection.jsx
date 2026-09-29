import React from "react";

import people1 from "../assets/people1.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";

const testimonials = [
  {
    image: people1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    image: people2,
    name: "James L.",
    role: "Lifelong Learner",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    image: people3,
    name: "Alex B.",
    role: "Inspired Creator",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

const LastSection = () => {
  return (
    <section
      id="community"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fffdfd]
        py-[75px]
        md:py-[82px]
      "
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      {/* Center Lime Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[90px]
          -translate-x-1/2
          w-[600px]
          h-[500px]
          rounded-full
          bg-[#dfff3f]/45
          blur-[115px]
          pointer-events-none
        "
      />

      {/* Bottom Left Blue Glow */}
      <div
        className="
          absolute
          left-[-180px]
          bottom-[-170px]
          w-[500px]
          h-[400px]
          rounded-full
          bg-[#cdd5ff]/75
          blur-[105px]
          pointer-events-none
        "
      />

      {/* Bottom Right Soft Glow */}
      <div
        className="
          absolute
          right-[-180px]
          bottom-[-180px]
          w-[400px]
          h-[350px]
          rounded-full
          bg-[#f1eaff]/60
          blur-[100px]
          pointer-events-none
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          max-w-[1120px]
          mx-auto
          px-6
        "
      >
        {/* ================= TOP CONTENT ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-[45px]
            lg:gap-[80px]
            items-start
          "
        >
          {/* Heading */}
          <div>
            <h2
              className="
                max-w-[500px]
                text-[38px]
                md:text-[42px]
                lg:text-[44px]
                leading-[1.15]
                font-bold
                tracking-[-1.5px]
                text-[#050505]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Description */}
          <div>
            <p
              className="
                max-w-[530px]
                text-[15px]
                md:text-[16px]
                leading-[1.7]
                font-normal
                text-[#5f5f5f]
              "
            >
              At ByteSpace, our vibrant community of learners and creators is
              at the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating
              on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <div
          className="
            mt-[68px]
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[20px]
          "
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                min-h-[400px]
                rounded-[20px]
                bg-white
                px-[22px]
                py-[23px]
                shadow-[0_5px_25px_rgba(0,0,0,0.025)]
              "
            >
              {/* Profile */}
              <div
                className="
                  w-[75px]
                  h-[75px]
                  overflow-hidden
                  rounded-full
                  bg-[#eeeeee]
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* Name */}
              <h3
                className="
                  mt-[23px]
                  text-[18px]
                  leading-none
                  font-bold
                  text-[#080808]
                "
              >
                {item.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-[7px]
                  text-[15px]
                  leading-none
                  font-normal
                  text-[#2450e8]
                "
              >
                {item.role}
              </p>

              {/* Testimonial */}
              <p
                className="
                  mt-[28px]
                  text-[15px]
                  md:text-[16px]
                  leading-[1.72]
                  font-normal
                  text-[#666666]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastSection;