import Image from "next/image";
import React from "react";

const Consulting: React.FC = () => {
  
  const content = [
    {
      color: "#F8B634",
      colorName: "yellow",
      title: "Executive Strategy Workshops & Leadership Development",
      description:
        "Collaborate with leadership to identify strategic goals and prioritize analytics use cases through focused workshops and planning sessions.",
    },
    {
      color: "#F9813C",
      colorName: "orange",
      title: "Technology & Infrastructure Assessment",
      description:
        "Evaluate current data infrastructure, tools, and organizational readiness to build a strong foundation for analytics.",
    },
    {
      color: "#FA4B44",
      colorName: "red",
      title: "Implementation Planning",
      description:
        "Develop a phased approach balancing quick wins with long-term optimization goals.",
    },
    {
      color: "#9D3583",
      colorName: "purple",
      title: "Workforce Optimization",
      description:
        "Assess and optimize staffing models, shift patterns, and skill mix for efficient resource allocation.",
    },
    {
      color: "#F8B634",
      colorName: "yellow",
      title: "Process Enhancement",
      description:
        "Apply Discrete Event Simulation approaches to streamline patient flow and departmental workflows.",
    },
    {
      color: "#F9813C",
      colorName: "orange",
      title: "Resource Utilization Optimization",
      description:
        "Maximize the efficiency of medical equipment and facilities through data-driven insights and recommendations.",
    },
  ];


  return (
    <div>
      <div className='rounded-[40px] bg-white py-[33px] px-[28px] md:px-[47px]'>

        <h1 className=' font-medium text-[28px] md:text-[48px] leading-[40px] md:leading-[80px] text-[#161B24]'>7 - Strategic & Operational Consulting</h1>
        <p className=' mb-[44px] font-normal text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] text-[#161B24B2] mt-[5px]'>From executive strategy to resource optimization, we deliver end-to-end consulting services that enhance healthcare operations through data-driven planning and implementation.</p>

        <div className=" py-[32px] md:py-[82px]">
          <div className="flex md:gap-0 gap-10 flex-col h-full ">


            {
              content.map((item, index) =>
                <div key={index} className="flex flex-row items-center md:h-[156px]">
                  <div className="md:w-[40%] md:pr-11 md:text-right">
                    {index % 2 !== 0 && <div >
                      <h2 className=" text-[20px] md:text-[24px] font-medium mb-2 text-[#161B24]">
                        {item.title}
                      </h2>
                      <p className="text-[16px] leading-[28px] font-normal text-[#161B24B2]">
                        {item.description}
                      </p>
                    </div>
                    }
                  </div>

                  <div className={`w-[8%] hidden md:flex items-center h-full`}>
                    <div className="w-[30%] relative">  {index % 2 !== 0 ? <div className={`w-full h-[3px] bg-[${item.color}] `}></div>
                      :
                      <Image className=" absolute -right-3 -bottom-4 " src={`/${item.colorName}.svg`} width={26} height={26} alt='red arrow' />
                    }</div>
                    <div className={`w-[40%]  bg-[${item.color}] h-full`}></div>
                    <div className="w-[30%] relative ">  {index % 2 == 0 ? <div className={`w-full h-[3px] bg-[${item.color}] `}></div> :
                      <Image className=" absolute -left-3 -bottom-4 " src={`/${item.colorName}.svg`} width={26} height={26} alt='red arrow' />
                    }</div>

                  </div>
                  <div className="md:w-[40%] md:pl-11">
                    {index % 2 == 0 && <div>
                      <h2 className="text-[24px] font-medium  text-[#161B24]">
                        {item.title}
                      </h2>
                      <p className="text-[16px] leading-[28px] font-normal text-[#161B24B2]">
                        {item.description}
                      </p>
                    </div>
                    }
                  </div>
                </div>
              )}
          </div>
        </div>
        </div>
        </div>
        );
};

export default Consulting;
