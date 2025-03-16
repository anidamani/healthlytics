"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


interface ServiceHeroProps
{
  title:string,
  description:string,
  index:number
}
const ServiceHero:React.FC<ServiceHeroProps> = ({index,title,description}) => {
  return (
    <motion.div
      // Start slightly down and invisible, then fade + slide up
    
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      
    >
      <main>
        <div className="rounded-[40px]  bg-white py-[24px] lg:py-[41px] px-[24px] xl:px-[59px]">
          <div>
            {/* <h1 className="font-medium uppercase leading-[150%] tracking-[8px] text-[#204FF5] text-[16px]">
              Service
            </h1> */}
            <h2 className="mt-[16px] xl:mt-[25px] font-medium text-[28px] md:text-[34px] lg:text-[44px] xl:text-[54px] leading-[49px] xl:leading-[59px]">
            {index} - {title}
            </h2>
            <p className=" mt-[12px] xl:mt-[15px] text-[14px] xl:text-[16px] leading-[26px] xl:leading-[31px] font-normal text-[#161B24CC]">
               {description}
            </p>
          </div>

         
        </div>
      </main>
    </motion.div>
  );
};

export default ServiceHero;
