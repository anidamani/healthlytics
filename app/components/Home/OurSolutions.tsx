"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import EyeButton from '../EyeButton';
import Link from 'next/link';
const services = [
  {
    title: 'Data Fragmentation',
    description:
      'Healthcare providers often struggle with siloed and inaccessible data, hindering comprehensive patient care.',
  },
  {
    title: 'Operational Inefficiencies',
    description:
      'Manual processes, siloed date and outdated systems can lead to increased costs and reduced care quality.',
  },
  {
    title: 'Clinical Decision Challenges',
    description:
      'Without actionable data-driven insights, making informed clinical decisions becomes arduous.',
  },
  {
    title: 'Advanced Data Analytics',
    description:
      'We transform complex medical data into clear, actionable intelligence (predictive & prescriptive), enabling data-driven decisions.',
  },
  {
    title: 'AI-Powered Solutions',
    description:
      "Whether it's understanding where bottlenecks are in your patient flow or providing deep analytics on patient clinical data/care, our AI tools enhance clinical outcomes and streamline operations.",
  },
  {
    title: 'Seamless Integration',
    description:
      'Tailored interfaces provide real-time insights for healthcare professionals AND our solutions integrate smoothly with existing healthcare systems, ensuring minimal disruption.',
  },
  {
    title: 'Workforce and Operations Management',
    description:
      'Minimize overtime and reduce reliance on agency staff through AI driven scheduling, keeping your team energized and engaged while preventing burnout.',
  },

];

const OurSolutions = () => {
  return (
    <div className="mt-[70px]">
      {/* Top section: 2-column grid */}
      <div className="grid md:grid-cols-[40%_auto] lg:grid-cols-[30%_auto] items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }} // 'once: true' -> animate only once
          className="md:order-none order-2 md:py-0 py-[24px] px-[24px] xl:px-[48px]"
        >
          <h2 className="mb-[32px] font-normal text-[16px] md:text-[18px] text-[#1D1D21]">
          We empower healthcare organizations to harness the full potential of data analytics and AI for precise, efficient, and patient-centered care.
          </h2>
          <Link href="/contact">
          <button className="bg-[#101010] text-[16px] w-full justify-center text-white flex items-center gap-[10px] border rounded-full py-[12px] px-[12px]">
            <span>Get Started</span>
            <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
          </button>
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-tr-[40px] rounded-bl-[40px] md:rounded-bl-[0px] rounded-br-[40px] md:rounded-br-[0px]  rounded-tl-[40px] bg-white py-[50px] px-[24px] xl:px-[48px]"
        >
          <div className="flex lg:flex-row flex-col relative">
            <h1 className="flex-1 font-medium text-[28px] sm:text-[34px] lg:text-[54px] xl:text-[64px]">
              <span className="bg-[#79ED9E80] rounded-[20px] px-2 py-1">
                Showcasing
              </span>{" "}
              Our AI Powered{" "}
              <span className="bg-[#79ED9E80] rounded-[20px] px-2 py-1">
                Healthcare
              </span>{" "}
              Solutions.
            </h1>
            <Link href="/products">
            <div className="flex justify-end flex-col mt-3 lg:-mt-12">
              <EyeButton />
            </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Solutions Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white rounded-tr-[40px] md:rounded-tr-[0px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] pb-[34px] px-[24px] xl:px-[48px]"
      >
        {/* Upper part of solutions */}
        <div className="grid lg:grid-cols-[40%_auto] gap-[15px] py-[48px]">
          <div>
          
          <h2 className="text-[#1D1D21] font-medium text-[24px] xl:text-[32px]">
            <span className="bg-[#79ED9E80] rounded-[20px] px-2 py-1">
            Problems
              </span>{" "} We Solve
              </h2>
          <div className="grid lg:grid-cols-1 grid-cols-1 sm:grid-cols-2">
            {services.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="p-[12px] sm:p-[24px] rounded-[40px] hover:bg-[#EDEDED]"
              >
                <h2 className="text-[#1D1D21] font-medium text-[18px] xl:text-[24px]">
                  {item.title}
                </h2>
                <p className="text-[16px] xl:text-[18px] font-normal text-[#1D1D21]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          </div>
          <Image
            src="/Illustrations.svg"
            width={765}
            height={548}
            alt="dashboard"
            className="w-full h-full"
          />
        </div>

        {/* Lower part of solutions */}
        <div>
        <h2 className="text-[#1D1D21] font-medium text-[24px] xl:text-[32px]">
        Our <span className="bg-[#79ED9E80] rounded-[20px] px-2 py-1">
        Features
              </span>{" "} 
              </h2>
       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {services.slice(4).map((item, index) => (
            <div
              key={index}
              className="pl-[12px] sm:p-[24px] rounded-[40px] hover:bg-[#EDEDED]"
            >
              <h2 className="text-[#1D1D21] font-medium text-[18px] xl:text-[24px]">
                {item.title}
              </h2>
              <p className="text-[16px] xl:text-[18px] font-normal text-[#1D1D21]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurSolutions;
