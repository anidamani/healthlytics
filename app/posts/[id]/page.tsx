"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getPostById, urlFor } from '../../lib/sanity';
import { PortableText } from '@portabletext/react';

interface Post {
  _id: string;
  title: string;
  description: any;  // Using 'any' for Portable Text content from post's body field
  slug: string;
  image?: any;  // This is now mapped from mainImage in the query
}

const Page = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);  // State to handle loading status

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split('/').pop();  // Get last segment of the URL as the ID

    if (id) {
      fetchPostData(id);
    }
  }, []);

  const fetchPostData = async (postId: string) => {
    setIsLoading(true);  // Set loading to true when the fetch starts
    try {
      const postData = await getPostById(postId);
      setPost(postData);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setIsLoading(false);  // Set loading to false when the fetch completes
    }
  };

  if (isLoading) return <div>Loading...</div>;  // Display loading message while fetching data

  if (!post) return <div>Post not found</div>;  // Display if no post is found

  const { title, description, image } = post;

  return (
    <div className='article-content px-4 py-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>{title}</h1>
      {image && (
        <div className='mb-8'>
          <Image
            src={urlFor(image).width(750).url()}
            alt={title}
            width={750}
            height={429}
            className='rounded-lg'
          />
        </div>
      )}
      {/* Render Portable Text content */}
      <div className='prose max-w-none'>
        {description && <PortableText value={description} />}
      </div>
    </div>
  );
};

export default Page;
