import Image from "next/image";
import React from "react";

const StockMilestones: React.FC = () => {
  const colors = [
    {
      title: "Launch of New Product Line",
      date: "02 Nov 2020",
      color: "bg-[#6C0090]",
      arrowSrc: "/stocks/polygon1.svg.svg",
    },
    {
      title: "Quarterly Earnings Report",
      date: "02 Nov 2021",
      color: "bg-[#DA16DD]",
      arrowSrc: "/stocks/polygon2.svg.svg",
    },
    {
      title: "Partnership with Tech Company",
      date: "02 Nov 2022",
      color: "bg-[#863E9E]",
      arrowSrc: "/stocks/polygon3.svg.svg",
    },
    {
      title: "Expansion into European Markets",
      date: "02 Nov 2023",
      color: "bg-[#FF66FC]",
      arrowSrc: "/stocks/polygon4.svg.svg",
    },
    {
      title: "Acquisition of Competitor",
      date: "02 Nov 2024",
      color: "bg-[#BF00FF]",
      arrowSrc: "/stocks/polygon5.svg.svg",
    },
    {
      title: "Expansion into Asian Markets",
      date: "02 Nov 2024",
      color: "bg-[#E8A4FF]",
      arrowSrc: "/stocks/polygon6.svg.svg",
    },
  ];
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
      <div className='rounded-[40px] bg-white py-[33px] px-[47px]'>

        <h1 className=' font-medium text-[48px] leading-[80px] text-[#161B24]'>Strategic & Operational Consulting</h1>
        <p className=' mb-[44px] font-normal text-[20px] leading-[34px] text-[#161B24B2] mt-[5px]'>From executive strategy to resource optimization, we deliver end-to-end consulting services that enhance healthcare operations through data-driven planning and implementation.</p>

        <div className="py-[82px]">
          <div className="flex flex-col h-full ">


            {
              content.map((item, index) =>
                <div key={index} className="flex flex-row items-center h-[156px]">
                  <div className="w-[40%] pr-11 text-right">
                    {index % 2 !== 0 && <div >
                      <h2 className="text-[24px] font-medium mb-2 text-[#161B24]">
                        {item.title}
                      </h2>
                      <p className="text-[16px] leading-[28px] font-normal text-[#161B24B2]">
                        {item.description}
                      </p>
                    </div>
                    }
                  </div>

                  <div className={`w-[8%]  flex items-center h-full`}>
                    <div className="w-[30%] relative">  {index % 2 !== 0 ? <div className={`w-full h-[3px] bg-[${item.color}] `}></div>
                      :
                      <Image className=" absolute -right-3 -bottom-4 " src={`/${item.colorName}.svg`} width={26} height={26} alt='red arrow' />
                    }</div>
                    <div className={`w-[40%]  bg-[${item.color}] h-full`}></div>
                    <div className="w-[30%] relative ">  {index % 2 == 0 ? <div className={`w-full h-[3px] bg-[${item.color}] `}></div> :
                      <Image className=" absolute -left-3 -bottom-4 " src={`/${item.colorName}.svg`} width={26} height={26} alt='red arrow' />
                    }</div>

                  </div>
                  <div className="w-[40%] pl-11">
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

        export default StockMilestones;
