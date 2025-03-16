

import React from 'react'
import Image from 'next/image'
const Button:React.FC<{text:string}> = ({text}) => {
  return (
    <button style={{ backgroundImage: "linear-gradient(67.37deg, #0050FF -16.64%, #3CF096 111.05%)" }}
      
    className="flex  group w-full items-center justify-center cursor-pointer  rounded-full text-white py-2 sm:py-4 px-6 text-[12px] sm:text-[14px] md:text-[16px] font-medium  gap-[10px]"
    >
       <span className='  shrink-0'>{text}</span> 
      <Image className='group-hover:rotate-45' src="/arrow.svg" width={24} height={24} alt="arrow"/>
    </button>
  )
}

export default Button