import React from "react";

import serv1 from "../assets/serv1.png";
import serv2 from "../assets/serv2.png";
import serv3 from "../assets/serv3.png";
import serv4 from "../assets/serv4.png";
import serv5 from "../assets/serv5.png";
import serv6 from "../assets/serv6.png";

const services = [
  {
    name: "Design",
    image: serv1,
  },
  {
    name: "Development",
    image: serv2,
  },
  {
    name: "IT & Software",
    image: serv3,
  },
  {
    name: "Business",
    image: serv4,
  },
  {
    name: "Marketing",
    image: serv5,
  },
  {
    name: "Photography",
    image: serv6,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-white py-[40px] md:py-[42px]"
    >
      <div className="max-w-[1030px] mx-auto px-4">

        {/* ================= HEADING ================= */}
        <div className="text-center">

          <h2
            className="
              text-[#08091c]
              text-[30px]
              md:text-[32px]
              font-bold
              leading-[1.2]
              tracking-[-1px]
            "
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="
              max-w-[780px]
              mx-auto
              mt-[15px]
              text-[#92909a]
              text-[14px]
              md:text-[15px]
              leading-[1.7]
            "
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various
            <br className="hidden md:block" />
            fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>

        </div>

        {/* ================= CATEGORY CARDS ================= */}
        <div
          className="
            mt-[58px]
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-6
            gap-[18px]
            justify-items-center
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                w-full
                max-w-[142px]
                h-[142px]
                rounded-[19px]
                border
                border-[#d9d9d9]
                bg-white
                flex
                flex-col
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]
              "
            >

              {/* Icon Circle */}
              <div
                className="
                  w-[51px]
                  h-[51px]
                  rounded-full
                  bg-[#dfff3f]
                  flex
                  items-center
                  justify-center
                  mb-[12px]
                "
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="
                    w-[27px]
                    h-[27px]
                    object-contain
                  "
                />
              </div>

              {/* Category Name */}
              <h3
                className="
                  text-[16px]
                  font-medium
                  text-[#222222]
                  leading-none
                  text-center
                  whitespace-nowrap
                "
              >
                {service.name}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;