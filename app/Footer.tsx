import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='bg-[#161B24] mb-[57px] rounded-[40px] px-[24px] xl:pl-[48px] xl:pr-[50px] pt-[80px] pb-[56px]'>
            <div className='flex lg:flex-row  flex-col-reverse gap-3  justify-between lg:items-start w-full '>
                {/* Left section */}
                <div className='flex sm:flex-row flex-col lg:justify-start  justify-between flex-grow gap-[30px] xl:gap-[75px]'>
                    
                    <div>
                        <h2 className='font-medium text-[24px] text-white'>Resources</h2>
                        <div className='flex flex-col mt-[24px] gap-[16px]'>
                         <Link href="/posts"><h3 className='font-normal text-[18px] text-[#FAFAFA]'>Posts</h3></Link> 
                         <Link href="/products"><h3 className='font-normal text-[18px] text-[#FAFAFA]'>Case Studies</h3></Link> 
                          
                        </div>
                    </div>
                    {/* <div>
                        <h2 className='font-medium text-[24px] text-white'>Legal</h2>
                        <div className='flex flex-col mt-[24px] gap-[16px]'>
                            <h3 className='font-normal text-[18px] text-[#FAFAFA]'>Terms of Use</h3>
                            <h3 className='font-normal text-[18px] text-[#FAFAFA]'>Privacy Policy</h3>
                        </div>
                    </div> */}
                </div>

                {/* Right section */}
                <div className='flex-shrink-0 max-w-[80%] sm:max-w-[70%] md:max-w-[40%]'>
                    <Image src="/logo2.svg" width={383} height={68} alt='logo2' />
                    <p className='text-[#FAFAFA] mt-[15px] text-[16px] xl:text-[18px] font-normal'>
                    Since 2015 we have been revolutionizing healthcare delivery through cutting-edge data analytics and artificial intelligence services and products. We partner with healthcare organizations to unlock the full potential of their data, enabling more precise, efficient, and patient-centered care delivery.
                    </p>
                </div>
            </div>

            <div className='border-t border-[#606060] mt-[64px] flex lg:flex-nowrap flex-wrap sm:justify-center items-center gap-[16px] pt-[56px]'>


             {/* <button className='border border-[#FFFFFF] rounded-full px-[16px] py-[6px] text-[16px] font-normal text-white'>
             Instagram
             </button>
             <button className='border border-[#FFFFFF] rounded-full px-[16px] py-[6px] text-[16px] font-normal text-white'>
             Facebook
             </button>
             <button className='border border-[#FFFFFF] rounded-full px-[16px] py-[6px] text-[16px] font-normal text-white'>
             Twitter
             </button> */}

          <a href="mailto:healthlytics@iqonsulting.ca">
  <button className='border border-[#FFFFFF] rounded-full px-[16px] py-[6px] text-[16px] font-normal text-white'>
    Email
  </button>
</a>
<a href="https://www.linkedin.com/company/healthlytics-ai">
  <button className='border border-[#FFFFFF] rounded-full px-[16px] py-[6px] text-[16px] font-normal text-white'>
  LinkedIn
  </button>
</a>

             <button className='border w-full border-[#FFFFFF] flex items-center justify-center gap-2 rounded-full px-[16px] py-[8px] text-[14px] sm:text-[16px] font-normal text-white'>
            <Image src="/logo3.svg" width={24.45} height={24} alt='logo3'/>
            <span>healthlytics.ai fuelled by iQonsulting - All Rights Reserved - Copyright 2025</span> 
             </button>
            
            </div>
        </div>
    )
}

export default Footer
