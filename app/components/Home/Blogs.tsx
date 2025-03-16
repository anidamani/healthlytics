"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import BlogCard from './BlogCard';
import Link from 'next/link';

interface Blog {
  documentId: string;
  title: string;
  about: string;
  image?: {
    formats: {
      medium: {
        url: string;
      };
    };
  };
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('https://clever-presence-a67cb10add.strapiapp.com/api/blogs?populate=image')
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    // Wrap your container in motion.div to animate on scroll
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white mt-[90px] rounded-[40px] px-[23px] py-[34.21px]"
    >
      {/* Read More button */}
      <div className="flex justify-end">
        <div className="w-fit">
          <Link href="/blogs">
            <Button text="Read More" />
          </Link>
        </div>
      </div>

      <div className="text-[34px] mt-3 leading-[50px] md:text-[54px] md:leading-[70px] xl:text-[64px] px-[25px] font-medium text-[#161B24] xl:leading-[80px]">
        Our{" "}
        <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">
          Blogs
        </span>
      </div>
      <p className="text-[16px] md:text-[18px] sm:max-w-[90%] md:max-w-[70%] xl:max-w-[50%] px-[16px] md:px-[25px] mt-[24px] mb-[35px] leading-[28px] font-medium text-[#161B24B2]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry’s standard dummy text ever since the 
        1500s, when an unknown printer took.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-4">
        {blogs?.slice(0, 4).map((blog) => (
          <BlogCard key={blog.documentId} blog={blog} />
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;
