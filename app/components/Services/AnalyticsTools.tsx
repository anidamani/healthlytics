import React from 'react'
import Image from 'next/image'

const AnalyticsTools = () => {
  const tools = [
    'Microsoft Power BI',
    'Tableau',
    'Qlik',
    'IBM Cognos',
    'SAP Analytics Cloud',
    'Microstrategy'
  ]

  return (
    <div className='mt-[60px]'>
      <h1 className='text-center mb-[20px]  font-medium text-[40px] leading-[52px] text-[#161B24]'>
        We have expertise in all major BI and Analytics tools
      </h1>

      <div className='flex flex-col gap-[20px]'>
        {tools.map((tool) => (
          <div
            key={tool}
            className='flex items-center justify-between rounded-[16px] bg-white py-[29px] px-[28px]'
          >
            <h3 className='font-medium text-[24px] leading-[48px] text-[#161B24]'>{tool}</h3>
            {/* <Image src="/add.svg" width={42} height={42} alt='icon' /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsTools
