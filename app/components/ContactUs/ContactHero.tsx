"use client"; // Only needed if you're using Next.js App Router
import React from 'react';
import { motion } from 'framer-motion';
import ToggleComponent from '../ToggleComponent';

const ContactHero = () => {
  return (
    // Wrap everything in a motion.main to enable scroll-triggered animation
    <motion.main
      initial={{ y: 60, opacity: 0 }}          // Starts 60px below, fully transparent
      whileInView={{ y: 0, opacity: 1 }}       // Slides up and becomes visible in view
      transition={{ duration: 1 }}             // 1 second duration so it's clearly noticeable
      viewport={{ once: true, amount: 0.2 }}   // Animate once when ~20% is in viewport
    >
      <div className="rounded-[40px] bg-white px-[24px] xl:px-[48px] pt-[32px] pb-[53px]">
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-24">
          <h1 className="font-medium text-[44px] lg:text-[54px] leading-[80px] text-[#161B24]">
            Contact Us
          </h1>
          <ToggleComponent />
        </div>

        <p className="text-[14px] mt-4 md:text-[18px] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[60%] leading-[28px] font-medium text-[#161B24B2]">
        Join the revolution in healthcare data analytics and AI. Let's work together to unlock the full potential of your data. Contact us for a 30-minute complimentary discovery call to start your journey today.
        </p>
      </div>
    </motion.main>
  );
};

export default ContactHero;
