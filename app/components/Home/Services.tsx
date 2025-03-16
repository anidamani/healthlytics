// components/Services.tsx
"use client"; // If you're using Next.js App Router
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
const servicesData = [
  {
    image: '/s1.jpg',
    title: 'Governance & Compliance',
    description: 'Industry leading frameworks that ensure data security.'
  },
  {
    image: '/s2.jpg',
    title: 'Advanced Analytics & AI',
    description: 'Predictive insights and intelligent automation that transform clinical operations.'
  },
  {
    image: '/s3.jpg',
    title: 'Data Integration',
    description: 'Integrate EMR HIS, HR, payroll, and specialized clinical systems.'
  },
  {
    image: '/s4.jpg',
    title: 'Business Intelligence',
    description: 'Interactive dashboards, reports and analytics that deliver real time insights.'
  },
  {
    image: '/s5.jpg',
    title: 'Microsoft Fabric Implementation',
    description: 'As a certified Microsoft part, provide enterprise-grade data.'
  },
  {
    image: '/s6.jpg',
    title: 'Custom Healthcare AI Solutions Development',
    description: 'Custom built solutions for patient engagement and clinical workflows.'
  },
  {
    image: '/s7.jpg',
    title: 'Strategic Consulting',
    description: 'Expert guidance to accelerate your digital transformation journey.'
  },
  {
    image: '/s8.jpg',
    title: 'Training & Support',
    description: 'Comprehensive capability building through hands-on workshops.'
  },
];

const Services: React.FC = () => {
  return (
    // Wrap with motion.div for a single scroll-trigger animation
    <motion.div
      initial={{ y: 40, opacity: 0 }}    // start below + transparent
      whileInView={{ y: 0, opacity: 1 }} // slide up + fully visible in view
      transition={{ duration: 1 }}
      
      className="mt-[90px]"
    >
      <h1 className="max-w-[70%] md:max-w-[60%] font-medium text-[28px] sm:text-[34px] md:text-[54px] xl:text-[64px] leading-[40px] sm:leading-[60px] md:leading-[80px] text-[#161B24]">
        <span className="bg-[#79ED9E80] rounded-[20px] px-2 ">Our</span> Comprehensive{" "}
        <span className="bg-[#79ED9E80] rounded-[20px] px-2 ">Service</span> Portfolio
      </h1>
      <p className="text-[16px] lg:text-[18px] mt-2 max-w-[90%] sm:max-w-[80%] lg:max-w-[50%] mb-[35px] leading-[28px] font-medium text-[#161B24B2]">
        At Healthlytics.ai, we empower healthcare organizations with cutting-edge data and AI solutions that drive clinical excellence and operational efficiency.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[25px]">
        {servicesData.map((service,index) => (
          <Link key={index} href={`/services/${index+1}`}>
          <ServiceCard
            key={service.title}
            image={service.image}
            title={service.title}
            description={service.description}
          />
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
