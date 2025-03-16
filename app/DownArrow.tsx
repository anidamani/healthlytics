

import React from 'react'
import Image from 'next/image'
const DownArrow = () => {
  return (
    <div className=' w-[134px] rounded-[100px] border-[#161B24] border'>
             <div className=' w-[116px]  rounded-[100px] border-[#161B24] border'>
             <div className=' w-[100px] flex items-center  gap-[10px] justify-center h-[56px] rounded-[30px] border-[#161B24] border'>
                
                <Image className=' rotate-45' src="/rightarrow.svg" width={36} height={29} alt='arrow'/>
             </div>
             </div>
        </div>
  )
}

export default DownArrow