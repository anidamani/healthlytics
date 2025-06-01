

"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import PostCard from '../components/Home/PostCard';
import { getAllPosts } from '../lib/sanity';

interface Post {
  _id: string;
  title: string;
  about: string;
  slug: string;
  image?: any;
}

 
const Page = () => {
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
    <div>
         <div className=' text-[34px] my-4 leading-[50px] md:text-[54px] md:leading-[70px] xl:text-[64px] px-[25px] font-medium text-[#161B24] xl:leading-[80px]'>
         Our  <span className='bg-[#79ED9E80] px-4 py-1 rounded-[30px] '>Posts</span> 
         </div>
         <div className='grid sm:grid-cols-2 gap-3 lg:grid-cols-4'>
      {posts.map(post => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Page