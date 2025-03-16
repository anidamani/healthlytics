

import React from 'react'
import Image from 'next/image'
import AnalyticsCard from './AnalyticsCard'
const items = [
    {
      img: "/a1.svg",
      title: "Real-time Analytics",
      description:
        "Implement streaming analytics capabilities for real-time monitoring of patient data, equipment status, and operational metrics with automated alerts and dashboards."
    },
    {
      img: "/a2.svg",
      title: "Security & Compliance",
      description:
        "Ensure data protection through role-based access control, encryption at rest and in transit, and detailed audit logging for healthcare compliance requirements."
    },
    {
      img: "/a3.svg",
      title: "Integration Capabilities",
      description:
        "Connect seamlessly with existing healthcare systems, EMRs, and third-party applications through standardized interfaces and healthcare-specific connectors."
    }
    ]
const childVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
const FabricImplementation = () => {
    return (
        <div>
            
        <div className='rounded-[40px] bg-white py-[33px] px-[28px] md:px-[47px]'>

            <h1 className=' font-medium text-[28px] md:text-[48px] leading-[40px] md:leading-[80px] text-[#161B24]'>5 - Microsoft Fabric Implementation</h1>
            <p className=' mb-[44px] font-normal text-[20px] leading-[34px] text-[#161B24B2] mt-[5px]'>Our Microsoft Fabric implementation service helps healthcare organizations build a secure, scalable data platform that unifies their data while ensuring compliance. We provide end-to-end support, from design to deployment and optimization.</p>
              
            <div className=' flex items-center '>

                {/* <Image src='/bar.svg' width={126} height={628} alt=''/> */}
                <div className='flex sm:h-[156px] gap-[40px] items-center'>

                    <div className='h-full hidden sm:flex items-center flex-1 w-[126px]'>

                        <div className='bg-[#F8B634] h-full w-[40px] '></div>
                        <div className='flex -ml-3 items-center'>
                            <Image src="/yellow.svg" width={26} height={26} alt='red arrow' />
                            <div className='h-[3px] w-[80px] bg-[#F8B634]'></div>
                        </div>

                    </div>

                    <div>
                        <h1 className=' font-medium text-[24px] text-[#161B24]'>Enterprise-Grade Scalability</h1>
                        <p className=' font-normal text-[16px] leading-[28px]  text-[#161B24B2]'>Scale seamlessly from gigabytes to petabytes of healthcare data with automatic resource allocation and performance optimization, supporting growing organizational needs without system restructuring.</p>
                    </div>
                </div>


            </div>
            <div className='flex items-center'>

                {/* <Image src='/bar.svg' width={126} height={628} alt=''/> */}
                <div className='flex sm:h-[156px] gap-[40px] items-center'>

                    <div className='h-full hidden sm:flex items-center flex-1 w-[126px]'>

                        <div className='bg-[#F9813C] h-full w-[40px] '></div>
                        <div className='flex -ml-3 items-center'>
                            <Image src="/orange.svg" width={26} height={26} alt='red arrow' />
                            <div className='h-[3px] w-[80px] bg-[#F9813C]'></div>
                        </div>

                    </div>

                    <div>
                        <h1 className=' font-medium text-[24px] text-[#161B24]'>Flexible Architecture</h1>
                        <p className=' font-normal text-[16px] leading-[28px]  text-[#161B24B2]'>Adapt the platform to your specific healthcare workflows with customizable data models, integration patterns, and analytics capabilities that evolve with your organization's requirements.</p>
                    </div>
                </div>


            </div>
            {/* third */}
            <div className='flex items-center'>

                {/* <Image src='/bar.svg' width={126} height={628} alt=''/> */}
                <div className='flex sm:h-[156px] gap-[40px] items-center'>

                    <div className='h-full hidden sm:flex items-center flex-1 w-[126px]'>

                        <div className='bg-[#FA4B44] h-full w-[40px] '></div>
                        <div className='flex -ml-3 items-center'>
                            <Image src="/red.svg" width={26} height={26} alt='red arrow' />
                            <div className='h-[3px] w-[80px] bg-[#FA4B44]'></div>
                        </div>

                    </div>

                    <div>
                        <h1 className=' font-medium text-[24px] text-[#161B24]'>Unified Data Foundation</h1>
                        <p className=' font-normal text-[16px] leading-[28px]  text-[#161B24B2]'>Consolidate all healthcare data types in a single platform using Microsoft Fabric's lakehouse architecture, enabling seamless integration of structured and unstructured data while maintaining HIPAA compliance.</p>
                    </div>
                </div>


            </div>
            {/* fourth */}
            <div className='flex items-center'>

                {/* <Image src='/bar.svg' width={126} height={628} alt=''/> */}
                <div className='flex sm:h-[156px] gap-[40px] items-center'>

                    <div className='h-full hidden sm:flex items-center flex-1 w-[126px]'>

                        <div className='bg-[#9D3583] h-full w-[40px] '></div>
                        <div className='flex -ml-3 items-center'>
                            <Image src="/purple.svg" width={26} height={26} alt='red arrow' />
                            <div className='h-[3px] w-[80px] bg-[#9D3583]'></div>
                        </div>

                    </div>

                    <div>
                        <h1 className=' font-medium text-[24px] text-[#161B24]'>Cost-Optimized Operations</h1>
                        <p className=' font-normal text-[16px] leading-[28px]  text-[#161B24B2]'>Leverage independent scaling of compute and storage resources, ensuring cost-effective operations by paying only for the resources you use while maintaining high performance.</p>
                    </div>
                </div>


            </div>






        </div>
          
          <div className='grid mt-[50px] mb-[40px] md:grid-cols-2 gap-[40px]'>
          {items.slice(0,2).map((item, index) => (
          <AnalyticsCard key={index} item={item} variants={childVariants} />
        ))}
          </div>
          <div>
          <AnalyticsCard  item={items[2]} variants={childVariants} />
          </div>
        </div>
    )
}

export default FabricImplementation