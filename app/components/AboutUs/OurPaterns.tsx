"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const members = [
    {
        img: "/rn1.png",
        name: "",
        description: "Arancia is more than a partner. Arancia is the Cyber Security services division and provider of its associated services to iQonsulting (including all of its products and services such as healthlytics.ai and waivs.ai). Arancia is a digital transformation company focused on Cloud Computing, Managed Services, Cybersecurity, Cloud security, Threat Hunting, 24/7 Managed SIEM and SOC services. Learn more about Arancia at https://arancia.ca/.",
      },
  {
    img: "/m5.jpeg",
    name: "Dr. Meraj A. Khan, Partner, Clinical Research",
    description: "Dr. Khan is a distinguished clinical researcher with over 20 years of multidisciplinary experience spanning Clinical and Basic Science, Artificial Intelligence/Machine Learning, and HealthTech. Renowned for his technical expertise, Dr. Khan excels in Genetic Engineering, Genomics, Personalized Medicine, Digital Twins, and Molecular Biology, driving innovative advancements at the intersection of cutting-edge research and technology.",
  },
  {
    img: "/m6.jpg",
    name: "Samer Abou-Sweid, Managing Partner, LHP",
    description: "Samer is an accomplished healthcare executive with over 25 years in senior executive roles across leading Canadian hospitals and long term care, in both public and private sector. He has an excellent track record of transforming culture and achieving exceptional performance through visionary system-thinking and leader empowerment.Samer is the Principal and Managing Partner of London Health Partners (LHP), a healthcare consultancy dedicated to empowering hospitals and healthcare systems globally to navigate complex challenges, transform care delivery, and implement advanced digital health strategies."
,
  },
];

const OurPaterns = () => {
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
          Meet
          <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">Our Partners</span>
        </h1>
        <p className="mt-2 text-[16px] text-[#161B24B2] max-w-3xl mx-auto">
        Our partners are an integral part of the iQonsulting and healthlytics.ai familia. 
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[60px] mt-[50px] px-[20px] lg:px-[43px]">
        {members.map((item, index) => (
          <div key={index} className="relative group cursor-pointer" onClick={() => handleToggle(index)}>
            {/* Member Image */}
            <Image
              src={item.img}
              width={409}
              height={300}
              alt={item.name}
              className={`w-full h-full min-h-[400px] ${index==0?'bg-black':''} rounded-lg shadow-md`}
            />

            {/* Overlay (Visible on Hover for Desktop, Click for Mobile) */}
            <motion.div
              className={`absolute top-0 left-0 px-2 w-full h-full bg-black/70 flex flex-col items-center justify-center 
                rounded-lg transition-opacity duration-300 
                ${index==0?'bg-black':''}
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

export default OurPaterns;
