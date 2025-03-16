"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Blog {
  id: number;
  title: string;
  deccription: string;  
  image?: {
    formats: {
      medium: {
        url: string;
      }
    }
  };
}

const Page = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);  // State to handle loading status

  useEffect(() => {
    const path = window.location.pathname;
    const id = path.split('/').pop();  // Get last segment of the URL as the ID

    if (id) {
      fetchBlogData(id);
    }
  }, []);

  const fetchBlogData = async (blogId: string) => {
    setIsLoading(true);  // Set loading to true when the fetch starts
    try {
      const response = await fetch(`https://clever-presence-a67cb10add.strapiapp.com/api/blogs/${blogId}?populate=image`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBlog(data.data);
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setIsLoading(false);  // Set loading to false when the fetch completes
    }
  };

  if (isLoading) return <div>Loading...</div>;  // Display loading message while fetching data

  if (!blog) return <div>Blog not found</div>;  // Display if no blog is found

  const { title, deccription, image } = blog;

  return (
    <div className='article-content'>
      <h1>{title}</h1>
      {image && image.formats.medium && (
        <Image
          src={`${image.formats.medium.url}`}
          alt={title}
          width={750}
          height={429}
        />
      )}
      {/* Safely render HTML content from description */}
      <div dangerouslySetInnerHTML={{ __html: deccription }}></div>
    </div>
  );
};

export default Page;
