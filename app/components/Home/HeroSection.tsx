"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ToggleComponent from '../ToggleComponent';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <div className="bg-white px-[24px] xl:px-[48px] pb-[48px] pt-[34px] grid md:grid-cols-2 gap-[15px] rounded-[40px]">
      {/* Left side: Intro text & Toggle */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}  // Start slightly left and hidden
        animate={{ x: 0, opacity: 1 }}    // Slide in to normal position
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col">
          <h1 className="font-medium xl:max-w-[90%] relative text-[28px] sm:text-[34px] lg:text-[44px] xl:text-[54px] leading-[50px] lg:leading-[70px] xl:leading-[80px] text-[#161B24]">
            Revolutionizing Healthcare{" "}
            <span
              style={{
                background:
                  "linear-gradient(67.37deg, #3CF096 -16.64%,  #0050FF 111.05%)",
              }}
              className="rounded-[20px] py-1 px-3 text-white"
            >
              Delivery
            </span>{" "}
            <span
              style={{
                background:
                  "linear-gradient(67.37deg, #0050FF -16.64%, #3CF096 111.05%)",
              }}
              className="rounded-[20px] py-1 px-3 text-white"
            >
              through Data
            </span>{" "}
            Driven Innovation
          </h1>
          <div className="flex mb-3 mt-3 flex-col justify-end mr-12">
            <ToggleComponent />
          </div>
        </div>
        <p className="text-[14px] lg:text-[16px] xl:text-[18px] mb-[35px] max-w-[97%] xl:max-w-[75%] leading-[24px] xl:leading-[28px] font-medium text-[#161B24B2]">
        Empowering healthcare organizations to harness the full potential of data analytics and AI for precise, efficient, and patient-centered care.
        </p>
      </motion.div>

      {/* Right side: Hero image & button */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}   // Start slightly right and hidden
        animate={{ x: 0, opacity: 1 }}    // Slide in to normal position
        transition={{ duration: 0.6 }}
      >
        <Image
          className="relative w-full"
          src="/hero.svg"
          width={659}
          height={519}
          alt="hero"
        />

        <div className="-mt-7 sm:-mt-14 md:-mt-10 lg:-mt-12 xl:-mt-14 flex justify-end relative z-10">
          <Link className="w-[37%]" href="/services">
          <div >
            <Button text="Learn More" />
          </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
