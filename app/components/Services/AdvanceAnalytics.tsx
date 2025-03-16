"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsCard from './AnalyticsCard';

// Data array
const items = [
  {
    img: "/a1.svg",
    title: "Intelligent Staffing Forecasts",
    description:
      "Leverage historical patient data and acuity levels to precisely predict optimal staffing requirements, ensuring the right coverage at the right time."
  },
  {
    img: "/a2.svg",
    title: "Staff Wellbeing & Retention",
    description:
      "Minimize overtime and reduce reliance on agency staff through AI-driven scheduling, keeping your team energized and engaged while preventing burnout."
  },
  {
    img: "/a3.svg",
    title: "Resource Optimization",
    description:
      "Use real-time data to track admissions, optimize bed utilization, and efficiently manage patient flow to reduce length of stay while maintaining quality care."
  },
  {
    img: "/a4.svg",
    title: "Supply Chain Intelligence",
    description:
      "Streamline inventory management and optimize supply chain operations through predictive analytics and automated procurement workflows."
  },
  {
    img: "/a5.svg",
    title: "Advanced Analytics Integration",
    description:
      "Enhance operations with NLP-powered documentation, predictive population health insights, and data-driven cost optimization strategies."
  },
  {
    img: "/a6.svg",
    title: "Performance Monitoring",
    description:
      "Track key performance indicators and operational metrics in real-time, enabling data-driven decisions and continuous improvement in workforce management."
  },
  {
    img: "/a7.svg",
    title: "Skills Management",
    description:
      "Identify skill gaps and optimize training resources through AI-powered competency tracking and personalized development planning."
  },
  {
    img: "/a8.svg",
    title: "Regulatory Compliance",
    description:
      "Automate compliance monitoring and reporting while ensuring optimal staff coverage meets regulatory requirements and accreditation standards."
  },
];

// Container animation variants for staggering the cards
const containerVariants = {
  
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      staggerChildren: 0.1,
    },
  },
};

// Child animation variants passed to each ServiceCard
const childVariants = {
 
  show: { opacity: 1, y: 0 },
};

const AdvanceAnalytics = () => {
  return (
    <motion.div
      className="rounded-[40px] mt-[41px]"
      variants={containerVariants}
      
    >
      <motion.div className="grid md:grid-cols-2 gap-[40px]" variants={containerVariants}>
        {items.map((item, index) => (
          <AnalyticsCard key={index} item={item} variants={childVariants} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AdvanceAnalytics;
