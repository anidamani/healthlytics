"use client";
import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsCard from './AnalyticsCard';

// Data array
const items = [
  {
    img: "/a1.svg",
    title: "Patient Engagement Solutions",
    description:
      "Empower patients with intuitive digital tools for seamless healthcare management. Our platform enables easy appointment scheduling, smart medication reminders, and secure provider messaging, leading to better treatment adherence and improved health outcomes."
  },
  {
    img: "/a2.svg",
    title: "Clinical Workflow Integration",
    description:
      "Transform your clinical operations with intelligent workflow solutions. Our systems streamline documentation, enhance team coordination, and reduce administrative tasks through smart automation, allowing healthcare teams to focus more on patient care."
  },
  {
    img: "/a3.svg",
    title: "Clinical Decision Support",
    description:
    "Leverage AI-powered insights to make confident clinical decisions. Our system analyzes real-time patient data against comprehensive medical databases, delivering timely, evidence-based recommendations and proactive alerts to ensure optimal patient care."
  },
  
  {
    img: "/a4.svg",
    title: "AI Scribe",
    description:
      "Revolutionize clinical documentation with our AI-powered speech recognition system. AI Scribe automatically converts patient encounters into structured medical notes, reducing administrative burden and increasing face-to-face patient time. Features include real-time transcription, specialty-specific templates, and seamless EHR integration, helping providers see more patients while maintaining documentation quality."
  },
  
];

// Container animation variants for staggering the cards
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Healthlytcis = () => {
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

export default Healthlytcis;
