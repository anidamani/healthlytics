// components/ServiceCard.tsx
import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className='rounded-[40px] flex flex-col h-full w-full bg-white px-[25px] py-[31px]'>
      
      {/* Image Section */}
      <div className="w-full h-[300px] flex items-center justify-center">
        <Image 
          src={image} 
          width={275} 
          height={300} 
          alt='service' 
          className='w-full h-full object-cover rounded-lg'
        />
      </div>

      {/* Content Section */}
      <div className='flex flex-1 flex-col justify-between'>
        <div className='py-[28px]'>
          <h3 className='text-[18px] font-medium text-[#1D1D21]'>{title}</h3>
          {description && <p className='text-[16px] leading-[24px] font-normal text-[#606060]'>{description.slice(0, 60)}...</p>}
        </div>

        {/* Button Section */}
        <div className='flex flex-col justify-end flex-1 h-full'>
          <button className='bg-[#101010] group text-[16px] w-full justify-center text-white flex items-center gap-[10px] border rounded-full py-[12px] px-[12px]'>
            <span>View More</span>
            <Image className='group-hover:rotate-45' src="/arrow.svg" width={24} height={24} alt='arrow' />
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default ServiceCard;
