"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const members = [
  {
    img: "/m1.png",
    name: "Ihtisham Qureshi, Founding Partner",
    description: "Ihtisham is a seasoned digital health consultant with over 20 years of experience leading digital transformations across various sectors. He excels at crafting visionary strategies and roadmaps for Information Management (IM) and IT programs, delivering large-scale projects throughout the healthcare spectrum—covering acute care to long-term facilities—and extending into retail and pharmacy industries.",
  },
  {
    img: "/m2.jpg",
    name: "Nadim Sohail, Chief Data, Analytics AI Officer",
    description: "With over 20 years of experience in setting up and evangelizing enterprise-level data and analytical practices across the globe, Nadim is an industry leader in Digital, Data Analytics, Artificial Intelligence and Cloud to provide enterprise-wide innovative solutions for our clients. Nadim has a proven ability to establish digital data capabilities from the ground up and crafting cutting-edge AI-driven solutions. ",
  },
  {
    img: "/m3.png",
    name: "Craig Campbell, Lead AI Transformation",
    description: "The challenges of the healthcare sector over the past 20 years has been the driving force behind Craig’s work. With an educational background in healthcare operations, AI and business, he has extensive experience in helping many healthcare organizations meet their strategic objectives and drive transformational change.",
  },
  {
    img: "/rabia.png",
    name: "Rabia Alvi, Account Executive",
    description: "Rabia takes great pride in providing a wealth of expertise in account management. With a proven track record of delivering exceptional results, Rabia brings a unique blend of forward thinking, strong analytical skills, and a client-centric approach to every project.",
  },
 
];

const OurLeadership = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      className="mt-[82px]"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="px-[24px] text-center">
        <h1 className="text-[34px] md:text-[44px] lg:text-[54px] font-medium">
          Meet <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">Our</span> Core{" "}
          <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">Leadership</span> Team.
        </h1>
        <p className="mt-2 text-[16px] text-[#161B24B2] max-w-3xl mx-auto">
          Our diverse team brings together expertise in healthcare transformation, data science, and technology to drive innovation in healthcare analytics.
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[60px] mt-[50px] px-[20px] lg:px-[43px]">
        {members.map((item, index) => (
          <div key={index} className="relative h-full group cursor-pointer" onClick={() => handleToggle(index)}>
            {/* Member Image */}
            <Image
              src={item.img}
              width={409}
              height={300}
              alt={item.name}
              className="w-full h-full rounded-lg shadow-md"
            />

            {/* Overlay (Visible on Hover for Desktop, Click for Mobile) */}
            <motion.div
              className={`absolute top-0 left-0 px-2 w-full h-full bg-black/70 flex flex-col items-center justify-center 
                rounded-lg transition-opacity duration-300 
                ${activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
            >
              <h3 className="text-white text-[20px] text-center font-semibold">{item.name}</h3>
              <p className="text-white text-[16px] text-center mt-1">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurLeadership;
