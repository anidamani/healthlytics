"use client"
import Image from 'next/image';
import { useState } from 'react';
export default function ToggleComponent() {
  const [isClick,setClick]=useState(false)
  return (
   <div className='w-[160px] h-[48px] lg:h-[56px] rounded-[100px] border-[#161B24] border'>
     <div className='w-[135px] h-[48px] lg:h-[56px] rounded-[100px] border-[#161B24] border'>
     <div onClick={()=>setClick(!isClick)} className={`w-[106px] flex flex-col ${isClick?'items-end':'items-start'}  justify-center p-[12px] cursor-pointer h-[48px] lg:h-[56px] bg-black rounded-[100px] border-[#161B24] border`}>
       <Image src="/circle.svg" width={32} height={32} alt='circle' className=''/>
    </div>
    </div>
   </div>
  );
}
