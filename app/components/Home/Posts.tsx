"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import PostCard from './PostCard';
import Link from 'next/link';
import { getAllPosts } from '../../lib/sanity';

interface Post {
  _id: string;
  title: string;
  about: string;
  slug: string;
  image?: any;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postData = await getAllPosts();
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    
    fetchPosts();
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
          <Link href="/posts">
            <Button text="Read More" />
          </Link>
        </div>
      </div>

      <div className="text-[34px] mt-3 leading-[50px] md:text-[54px] md:leading-[70px] xl:text-[64px] px-[25px] font-medium text-[#161B24] xl:leading-[80px]">
        Our{" "}
        <span className="bg-[#79ED9E80] px-4 py-1 rounded-[30px]">
          Posts
        </span>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 lg:grid-cols-4">
        {posts?.slice(0, 4).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </motion.div>
  );
};

export default Posts;
