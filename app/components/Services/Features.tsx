"use client"; // If you're using Next.js App Router; remove if not needed.
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


// PARENT container animation variants (stagger + slide up)
const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      // total time for the parent to slide up
      duration: 1,
      // each child will start animating 0.2s after the previous one
      staggerChildren: 0.2,
    },
  },
};

// CHILD row animation variants
const childVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    // 1 second duration for each row – more than enough to notice the transition
    transition: {
      duration: 1,
    },
  },
};

interface FeaturesProps
{
services:any[]
}
const Features:React.FC<FeaturesProps> = ({services}) => {
  return (
    <motion.div
      className="rounded-[40px] mt-[80px] bg-white py-[90px] px-[24px] xl:px-[75px]"
      variants={containerVariants}
      
      // Animate only once when ~20% of container is in viewport:
      
    >
      {services?.map((item, index) => (
        // Each row is wrapped in a motion.div to apply the stagger
        <motion.div
          key={index}
          className="grid md:grid-cols-2 gap-[80px] items-center mb-[50px]" 
          variants={childVariants}
        >
          <Image
            className={`${
              index % 2 !== 0 ? "md:order-2" : ""
            } w-full object-cover`}
            src={item.image}
            width={622}
            height={400}
            alt={item.title}
          />
          <div>
            <h1 className="max-w-[90%] sm:max-w-[80%] xl:max-w-[80%] font-medium text-[28px] xl:text-[36px] leading-[36px] sm:leading-[45px]">
              {item.title}
            </h1>
            <p className="font-normal mt-[15px] text-[14px] xl:text-[18px] leading-[28px] text-[#161B24B2]">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;
