"use client";
import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface AnalyticsCardItem {
  img: string;
  title: string;
  description: string;
}

interface AnalyticsCardProps {
  item: AnalyticsCardItem;
  variants: Variants;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ item, variants }) => {
  return (
    <motion.div
      className="bg-white flex items-start gap-[20px] rounded-[40px] p-[40px]"
      variants={variants}
    >
      <Image src={item.img} width={90} height={90} alt={item.title} />
      <div>
        <h2 className="font-medium text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">{item.title}</h2>
        <p className=" text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30px] font-normal text-[#161B24B2]">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AnalyticsCard;
