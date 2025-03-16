"use client"; // Only needed if you're using the Next.js App Router
import DownArrow from '@/app/DownArrow';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurMission = () => {
  return (
    // Wrap your entire section in a motion.section
    <motion.section
      initial={{ y: 40, opacity: 0 }}       // Start below + invisible
      whileInView={{ y: 0, opacity: 1 }}    // Slide up + become fully visible
      transition={{ duration: 1 }}          // 1s duration so it's clearly noticeable
      viewport={{ once: true, amount: 0.2 }}// Animate once, ~20% in view triggers
    >
      <div className="rounded-[40px] mt-[45px] bg-white px-[24px] xl:px-[48px] py-[57px]">
        <div className="flex items-center">
          <div className="text-[44px] sm:text-[54px] xl:text-[64px] px-[18px] sm:px-[25px] font-medium text-[#161B24] leading-[60px] sm:leading-[70px] xl:leading-[80px]">
            Our{" "}
            <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">
              Mission
            </span>
          </div>
          <DownArrow />
        </div>

        <div className="grid lg:grid-cols-2 gap-[16px]">
          <div className="flex flex-col justify-between">
            {/* Info section */}
            <div className="pb-[50px]">
              <p className="text-[18px] mt-[24px] leading-[28px] font-medium text-[#161B24B2]">
                At Healthlytics.ai, we stand for a future in which every hospital
                and healthcare organization can seamlessly harness the power of
                data, analytics, and AI to deliver better, more personalized care
                for every patient—no matter who they are or where they live.
              </p>
              <p className="text-[18px] mt-[24px] leading-[28px] font-medium text-[#161B24B2]">
                We envision a world where healthcare professionals are liberated
                to focus on patient wellbeing, not wrestling with fragmented or
                inaccessible data.
              </p>
              <p className="text-[18px] mt-[24px] leading-[28px] font-medium text-[#161B24B2]">
                Our mission extends beyond just providing technology solutions.
                We are dedicated to fundamentally transforming how healthcare
                organizations operate.
              </p>
            </div>

            {/* Decision Makers */}
            <div className="rounded-[40px] bg-[#e4e9f9] px-[40px] py-[43px]">
              <Image src="/graph.svg" width={75} height={75} alt="" />
              <h2 className="text-[32px] md:text-[40px] font-medium text-[#000000]">
                Empowering Decision Makers
              </h2>
              <p className="text-[18px] md:text-[24px] font-normal text-[#000000CC]">
                By providing clear, actionable insights, we enable healthcare
                leaders to make informed decisions that improve both operational
                efficiency and patient care quality.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-[16px]">
            <div className="flex flex-col gap-[16px]">
              <div className="rounded-[40px] bg-[#F8F8F8] pt-[30px] pb-[40px] pl-[30px] pr-[18px]">
                <Image src="/people.svg" width={75} height={75} alt="people" />
                <h1 className="font-medium text-[26px] xl:text-[32px] text-[#161B24]">
                  Open <br /> Collaboration
                </h1>
                <p className="text-[18px] xl:text-[20px] mt-[10px] leading-[31px] font-normal text-[#161B24CC]">
                  Our mission is open to everyone within the healthcare ecosystem—
                  providers, patients, administrators, and technology experts
                  alike—so all can collaborate to unlock data’s full potential.
                </p>
              </div>
              <div className="rounded-[40px] bg-[#161B24] py-[32px] pl-[30px] pr-[18px]">
                <Image src="/tran.png" width={75} height={75} alt="people" />
                <h1 className="font-medium text-[26px] xl:text-[32px] text-white">
                  Transform Raw<br /> Information
                </h1>
                <p className="text-[16px] mt-[10px] leading-[31px] font-normal text-white">
                  By transforming raw information into actionable insights, we help 
                  organizations drive innovations that benefit patients at scale.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <div className="rounded-[40px] bg-[#79ED9E33] px-[33px] py-[30px] pr-[18px]">
                <Image src="/heart.png" width={75} height={75} alt="people" />
                <h1 className="font-medium text-[26px] xl:text-[32px] text-[#161B24]">
                  Equitable <br /> Healthcare
                </h1>
                <p className="text-[18px] xl:text-[20px] mt-[10px] leading-[31px] font-normal text-[#161B24CC]">
                  We believe this collective effort will make healthcare more 
                  equitable and effective for all communities.
                </p>
              </div>
              <div className="rounded-[40px] flex-1 bg-[#79ED9E] py-[32px] pl-[30px] pr-[18px]">
                <Image src="/bulb.png" width={75} height={75} alt="people" />
                <h1 className="font-medium text-[26px] xl:text-[32px] text-[#161B24]">
                  Continuous <br /> Innovation
                </h1>
                <p className="text-[16px] mt-[10px] leading-[31px] font-normal text-[#161B24CC]">
                  We are committed to pushing the boundaries of what's possible in 
                  healthcare analytics, constantly developing new solutions to 
                  address emerging challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;
