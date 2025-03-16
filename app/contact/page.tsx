"use client"; // Only if you're using Next.js App Router
import React from 'react';
import ContactHero from '../components/ContactUs/ContactHero';
import Image from 'next/image';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div>
      {/* Hero section: animate separately if desired */}
      <ContactHero />

      {/* Main contact/content section with scroll-triggered animation */}
      <motion.div
        className="mt-[60px]"
        initial={{ y: 60, opacity: 0 }}        // Start 60px down and invisible
        whileInView={{ y: 0, opacity: 1 }}     // Slide up to normal position
        transition={{ duration: 1 }}           // 1s duration for a clearly visible transition
        viewport={{ once: true, amount: 0.2 }} // Animate once when ~20% is in view
      >
        <div className="grid md:grid-cols-[70%_auto]">
          <div className="rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] bg-white px-[24px] xl:px-[48px] py-[42px]">
            <h1 className="font-medium text-[40px] text-[#101010]">Contact</h1>
            <p className="text-[14px] mt-4 md:text-[18px] sm:max-w-[90%] leading-[28px] font-medium text-[#161B24B2]">
            You're halfway there. Finding the right partner to solve your problems and/or enhance your services was the first step 🙂. Simply fill out the form below and our team will be in touch within two business days to start your journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[40%_auto]">
          <div className="flex flex-col gap-[40px] p-[24px] lg:p-[48px]">
            <div>
              <h1 className="font-medium text-[18px] lg:text-[24px] text-[#101010]">Email</h1>
              <h3 className="font-normal text-[16px] lg:text-[18px] text-[#1D1D21]">
                healthlytics@iqonsulting.ca
              </h3>
            </div>
            <div>
              <h1 className="font-medium text-[18px] lg:text-[24px] text-[#101010]">Phone</h1>
              <h3 className="font-normal text-[16px] lg:text-[18px] text-[#1D1D21]">
                +1-416-709-9883
              </h3>
              <h3 className="font-normal text-[16px] lg:text-[18px] text-[#1D1D21]">
              +1-800-638-0476
              </h3>
            </div>
            <div>
              <h1 className="font-medium text-[18px] lg:text-[24px] text-[#101010]">Address</h1>
              <h3 className="font-normal text-[16px] lg:text-[18px] text-[#1D1D21]">
              1A – 920 Caledonia Rd Toronto, ON M6B 3Y1 Canada
              </h3>
            </div>
            
          </div>

          <div className="rounded-tr-[40px] mb-14 rounded-bl-[40px] rounded-br-[40px] px-[24px] lg:px-[48px] xl:px-[64px] py-[48px] bg-white">
            <form action="">
              <div className="grid grid-cols-2 gap-y-[64px] gap-x-[30px]">
                <input
                required
                  type="text"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Your Name"
                />
                <input
                required
                  type="Email"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Your Email"
                />
                <input
                  type="text"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Phone Number"
                />
                <input
                required
                  type="text"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Country"
                />
                <input
                required
                  type="text"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Company Name"
                />
                <input
                required
                  type="text"
                  className="outline-none placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                  placeholder="Interested in"
                />
              </div>
              <input
              required
                type="text"
                className="outline-none mt-[64px] w-full placeholder-[#000000] border-b border-[#00000033] pb-[10px]"
                placeholder="Message"
              />

              <div className="w-fit mt-[40px]">
                <Button text="Send" />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
