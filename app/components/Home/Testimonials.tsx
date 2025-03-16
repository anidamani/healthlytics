"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonialData = [
  {
    id: 1,
    text: `"healthlytics.ai provided us with a comprehensive data governance and architecture review, delivering a clear roadmap to our target state. Their expertise in AI readiness and proof of concept execution has set us on a strong foundation for future innovation." - Director of Organizational Performance & Chief Privacy Officer (an academic 300+ bed Hospital in Canada).`,
    image: "/t1.svg"
  },
  {
    id: 2,
    text: `"We were constantly running out of critical care beds and at times had to send patients to our partners south of the border. Instead of determining how we can source and fund more beds, healthlytics.ai tackled the problem by identifying where our bottlenecks in our patient flow were and provided immediate low cost solutions whereby we were immediately able to reduce our surgical wait list by 27% and in turn see patients more efficiently.” - EVP Clinical Services (an academic 500+ bed Hospital in Canada) `,
    image: "/t1.svg"
  },
  {
    id: 3,
    text: `"At healthlytics.ai, we envision a world where healthcare professionals are liberated to focus on patient well-being, not wrestling with fragmented data. Our mission is to empower healthcare organizations to achieve better outcomes while reducing costs and administrative burdens." - Nadim Sohail, Chief AI Officer`,
    image: "/t1.svg"
  }
];
const members = [
 
  {
    img: "/m2.jpg",
    name: "Nadim Sohail",
    description: "Chief Data,Analytics AI Officer",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = testimonialData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : totalTestimonials - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < totalTestimonials - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="mt-[90px]">
      {/* Top section */}
      <div className="grid md:grid-cols-[60%_auto] items-center">
        {/* Left Side (Animated from left) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] py-[54px] px-[24px] xl:px-[48px]"
        >
          <h1 className="text-[#101010] font-medium text-[34px] lg:text-[44px] xl:text-[54px]">
          What top tier <span className="bg-[#79ED9E80] rounded-[20px] px-2">organizations say </span> about our products and services
          </h1>
        </motion.div>

        {/* Right Side (Animated from right) */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-[24px] md:py-0 px-[24px] lg:px-[48px]"
        >
          <p className="text-[18px] font-normal text-[#1D1D21]">
            Join the growing number of businesses and companies that have
            experienced the transformative impact of our healthlytics.ai
            services and products.
          </p>
        </motion.div>
      </div>

      {/* Testimonial Section (Fade up) */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="grid lg:grid-cols-[40%_auto] "
      >
        <div className="p-[24px]">
          <div  className="relative h-full">
                     <Image
                       src="/m2.jpg"
                       width={559}
                       height={304}
                       alt="m2"
                       className="w-full object-contain "
                     />
                     <div className="bg-white p-[25.11px] rounded-tr-[16.74px] -mt-10 relative z-10 max-w-[80%]">
                       <h3 className="font-medium text-[20px] leading-[24px] text-[#262626]">
                       Nadim Sohail
                       </h3>
                       <p className="font-normal text-[14px] leading-[20px] text-[#4C4C4D]">
                       Chief Data, Analytics & AI Officer
                       </p>
                     </div>
                   </div>
        </div>

        <div className="rounded-tr-[40px]  justify-between rounded-br-[40px] rounded-bl-[40px] p-[24px] flex-1 flex-col flex bg-white px-[12px] lg:px-[24px]">
          <div className="relative flex-1">
            <Image
              src="/bg.svg"
              alt="Background"
              width={1033}
              height={300}
              className="h-full rounded-[40px] object-cover min-h-[300px] pb-[26px] xl:pb-[47.21px] border-b border-[#D6D6D6]"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 p-[24px]">
              <button className="flex items-center sm:w-[38%] lg:w-[35%] justify-center gap-[10px] py-[11.5px] px-[16px] rounded-full border border-white text-white">
                <Image src="/commas.svg" width={24} height={24} alt="" />
                <span className="shrink-0 text-[12px] xl:text-[16px] sm:block hidden">
                  Client Testimonial
                </span>
              </button>
              <p className="font-normal text-[12px] mt-[18px] sm:text-[14px] md:text-[16px] xl:text-[24px] xl:leading-[38px] text-white pt-[16px] xl:pt-[32px]">
                {testimonialData[currentIndex].text}
              </p>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between pt-[16px] xl:pt-[22px]">
            <button className="text-[#1D1D21] border-[#1D1D21] border rounded-[100px] py-[12px] px-[24px]">
              {`${currentIndex + 1} / ${totalTestimonials}`}
            </button>
            <div className="flex items-center gap-[20px]">
              <button
                onClick={handlePrev}
                className="text-[#1D1D21] border-[#1D1D21] border rounded-[100px] py-[12px] px-[24px]"
              >
                <Image
                  src="/arrow-left.svg"
                  width={24}
                  height={24}
                  alt="arrow-left"
                />
              </button>
              <button
                onClick={handleNext}
                className="text-[#1D1D21] border-[#1D1D21] border rounded-[100px] py-[12px] px-[24px]"
              >
                <Image
                  className="rotate-180"
                  src="/arrow-left.svg"
                  width={24}
                  height={24}
                  alt="arrow-right"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
