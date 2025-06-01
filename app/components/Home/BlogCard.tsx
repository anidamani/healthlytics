
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

interface Blog {
  _id: string;
  title: string;
  about: string;
  slug: string;
  image?: any; // This is now mapped from mainImage in the query
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard:React.FC<BlogCardProps> = ({blog}) => {
  const imageUrl = blog.image 
    ? urlFor(blog.image).width(800).url()
    : '/s1.svg';
  return (
    <Link href={`/blogs/${blog._id}`}>
    <div className=' px-[12px] sm:px-[25px] py-[31px] '>
        <Image src={imageUrl} width={275} height={290} className='w-full' alt=''/>

        <div>
            <h1 className='text-[#1D1D21] mt-[27px] text-[20px] font-semibold'>{blog.title.slice(0,60)}...</h1>
            <p className='font-normal mt-[4px] text-[16px] leading-[24px] text-[#606060]'>{blog.about.slice(0,140)}...</p>
        </div>
    </div>
    </Link>
  )
}

export default BlogCard