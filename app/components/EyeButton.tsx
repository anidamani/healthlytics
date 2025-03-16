

import React from 'react'
import Image from 'next/image'
const EyeButton = () => {
  return (
    <div className=' py-1 px-2 w-fit rounded-[100px] border-[#161B24] border'>
         <div className='  px-2 rounded-[100px] border-[#161B24] border'>
         <div className='flex items-center px-[29px] gap-[10px] justify-center h-[56px] rounded-[100px] border-[#161B24] border'>
            <Image src="/eye.svg" alt='' width={45} height={33}/>
            <Image src="/rightarrow.svg" width={36} height={29} alt='arrow'/>
         </div>
         </div>
    </div>
  )
}

export default EyeButton