"use client"; // Required for client-side navigation
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Import to check the current path

const CallToAction = () => {
  const pathname = usePathname(); // ✅ Get the current route

  // ✅ Return null if the URL contains "/contact"
  if (pathname.includes("/contact")) return null;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative mt-[122px] mb-[80px] md:min-h-[500px]"
    >
      <Image
        src="/callToAction.svg"
        alt="Background"
        width={1376}
        height={468}
        className="w-full rounded-[40px] xl:rounded-[0px] object-cover min-h-[500px]"
        quality={100}
      />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col px-[24px] xl:pl-[48px] xl:pr-[54px]">
        <h1 className="text-[28px] sm:text-[34px] md:text-[44px] pt-[8px] sm:pt-[12px] xl:text-[64px] font-medium text-[#101010] mt-[30px] sm:mt-[56px] max-w-[90%]">
          Partner with Us to Transform Your Healthcare Delivery
        </h1>

        <div className="flex lg:flex-row flex-col justify-between mt-[18px] sm:mt-[30px] md:mt-[20px] lg:mt-[70px]">
          <p className="text-[#1D1D2199] sm:max-w-[70%] lg:max-w-[45%] font-normal text-[14px] sm:text-[18px] mt-2 sm:mt-4 mb-8">
            Join the revolution in healthcare data analytics and AI. Let's work together to unlock the full potential of your data. Contact us for a 30-minute complimentary discovery call to start your journey today.
          </p>

          <div className="flex sm:flex-row flex-col gap-4">
            <Link href="/contact">
              <button className="bg-black justify-center h-fit py-4 px-[28px] sm:px-[32px] flex items-center gap-[10px] rounded-full text-white">
                <span>Get Started</span>
                <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
