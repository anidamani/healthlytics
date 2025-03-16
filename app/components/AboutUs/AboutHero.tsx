"use client"; // Only needed if you're using Next.js App Router
import React from 'react';
import { motion } from 'framer-motion';
import ToggleComponent from '../ToggleComponent';

const AboutHero = () => {
  return (
    // Wrap the entire section in <motion.div>
    <motion.main
      initial={{ y: 40, opacity: 0 }}        // start below and transparent
      whileInView={{ y: 0, opacity: 1 }}     // slide up and become visible
      transition={{ duration: 0.8 }}         // 0.8s for a more noticeable transition
      viewport={{ once: true, amount: 0.2 }} // trigger once when ~20% of element is in view
    >
      <div className="rounded-[40px] bg-white px-[24px] xl:px-[48px] pt-[32px] pb-[53px]">
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-24">
          <h1 className="font-medium text-[44px] lg:text-[54px] leading-[80px] text-[#161B24]">
            About Us
          </h1>
          <ToggleComponent />
        </div>

        <p className="text-[14px] mt-4 md:text-[18px] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] leading-[28px] font-medium text-[#161B24B2]">
        Since 2015 we have been revolutionizing healthcare delivery through cutting-edge data analytics and artificial intelligence services and products. We partner with healthcare organizations to unlock the full potential of their data, enabling more precise, efficient, and patient-centered care delivery.
        </p>
      </div>
    </motion.main>
  );
};

export default AboutHero;
