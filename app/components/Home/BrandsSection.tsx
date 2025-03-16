"use client"; // If you are using Next.js App Router
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BrandsSection = () => {
  return (
    // Wrap your main container with motion.div
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white mt-[50px] grid grid-cols-2 sm:grid-cols-4 lg:flex flex-wrap items-center  gap-[52px] px-[40px] py-[30px] rounded-[40px]"
    >
      <Image className='' src="/logos/l1.png" width={150} height={50} alt="w-full" />
      <Image src="/logos/l2.png" width={124} height={50} alt="" />
      <Image src="/logos/l3.png" width={160} height={50} alt="" />
      <Image src="/logos/l4.png" width={180} height={50} alt="" />
      <Image src="/logos/l5.png" width={160} height={50} alt="" />
      <Image src="/logos/l6.png" width={100} height={50} alt="" />
      <Image src="/logos/l7.png" width={150} height={50} alt="" />
      <Image src="/logos/l8.png" width={150} height={50} alt="" />
      <Image src="/logos/l9.png" width={150} height={50} alt="" />
      <Image src="/logos/l10.png" width={150} height={50} alt="" />
      <Image src="/logos/l11.svg" width={150} height={50} alt="" />
    </motion.div>
  );
};

export default BrandsSection;
