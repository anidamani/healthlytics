
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { urlFor } from '../../lib/sanity';

interface Post {
  _id: string;
  title: string;
  about: string;
  slug: string;
  image?: any; // This is now mapped from mainImage in the query
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const imageUrl = post.image 
    ? urlFor(post.image).width(400).height(300).url()
    : '/s1.svg';
  return (
    <Link href={`/posts/${post._id}`}>
      <div className="px-[12px] sm:px-[25px] py-[31px]">
        <div className="relative w-full h-[200px] mb-4">
          <Image 
            src={imageUrl} 
            fill
            className="object-cover rounded-lg"
            alt={post.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <div>
          <h1 className="text-[#1D1D21] mt-[27px] text-[20px] font-semibold">
            {post.title.slice(0, 60)}...
          </h1>
          <p className="font-normal mt-[4px] text-[16px] leading-[24px] text-[#606060]">
            {post.about.slice(0, 140)}...
          </p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard