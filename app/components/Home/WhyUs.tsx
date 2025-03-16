

"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
const services = [
    {
        title: "Expert Team",
        description: "Our team comprises of      seasoned data scientists, data engineers, digital health consultants, and healthcare specialists with 20+ years of experience."
    },
    {
        title: "Proven Track Record",
        description: "Our Chief AI officer has a Trademark in AI, with another one on the way. Our team has already launched a number of AI products and services for healthcare organizations globally. Over the past two decades we have successfully led digital transformations across various healthcare sectors, from acute care to long-term facilities."
    },
    {
        title: "Patient-Centric Approach",
        description: "We know no two patients are the same and no two healthcare organizations are the same; we focus on delivering personalized solutions that prioritize patient well-being."
    },
    {
        title: "Commitment to Innovation",
        description: "We're dedicated to pushing the boundaries of what's possible in healthcare analytics. We are in the information age and are at the cusp of leading the charge."
    },
]

const WhyUs = () => {
    return (
        <div>
            <section className=" gap-8 rounded-[40px] bg-white p-[24px]  md:p-[48px] mt-[32px]">
                {/* Services List */}
                <h1 className="max-w-[70%] mb-3  md:max-w-[60%] font-medium text-[28px] sm:text-[34px] md:text-[54px] xl:text-[64px] leading-[40px] sm:leading-[60px] md:leading-[80px] text-[#161B24]">
                    Why <span className="bg-[#79ED9E80] rounded-[20px] px-2 ">Choose Us</span>

                </h1>
                 <motion.div
                       initial={{ opacity: 0, y: 40 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6 }}
                       viewport={{ once: true, amount: 0.2 }}
                       className="bg-white rounded-tr-[40px] md:rounded-tr-[0px] rounded-br-[40px] rounded-tl-[40px] rounded-bl-[40px] pb-[34px] "
                     >
                       {/* Upper part of solutions */}
                       <div className="grid lg:grid-cols-[40%_auto] gap-[15px] py-[48px]">
                         <div className="grid lg:grid-cols-1 grid-cols-1 sm:grid-cols-2">
                           {services.slice(0, 4).map((item, index) => (
                             <div
                               key={index}
                               className="p-[12px] sm:p-[24px] rounded-[40px] hover:bg-[#EDEDED]"
                             >
                               <h2 className="text-[#1D1D21] font-medium text-[18px] xl:text-[24px]">
                                 {item.title}
                               </h2>
                               <p className="text-[16px] xl:text-[18px] font-normal text-[#1D1D21]">
                                 {item.description}
                               </p>
                             </div>
                           ))}
                         </div>
                         <Image
                           src="/choose.jpeg"
                           width={765}
                           height={548}
                           alt="dashboard"
                           className="w-full rounded-[48px] h-full"
                         />
                       </div>
               
                       
                     </motion.div>
            </section>
        </div>
    )
}

export default WhyUs