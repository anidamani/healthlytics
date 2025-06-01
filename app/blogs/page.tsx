

"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import BlogCard from '../components/Home/BlogCard';
import { getAllBlogs } from '../lib/sanity';

interface Blog {
  _id: string;
  title: string;
  about: string;
  slug: string;
  image?: any;
}

 
const Page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const blogData = await getAllBlogs();
            setBlogs(blogData);
          } catch (error) {
            console.error('Error fetching blogs:', error);
          }
        };
        
        fetchBlogs();
    }, []);
  return (
    <div>
         <div className=' text-[34px] my-4 leading-[50px] md:text-[54px] md:leading-[70px] xl:text-[64px] px-[25px] font-medium text-[#161B24] xl:leading-[80px]'>
         Our  <span className='bg-[#79ED9E80] px-4 py-1 rounded-[30px] '>Blogs</span> 
         </div>
         <div className='grid sm:grid-cols-2 gap-3 lg:grid-cols-4'>
      {blogs.map(blog => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  )
}

export default Page