import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'r93bv3qb', // Sanity project ID
  dataset: 'production',
  apiVersion: '2023-05-03', // Use the latest API version
  useCdn: true, // Set to false if you want to ensure fresh data
});

// Helper function to build image URLs
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Function to fetch all posts
export async function getAllPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "about": body[0].children[0].text,
      "slug": slug.current,
      publishedAt,
      "image": mainImage
    }`
  );
}

// Function to fetch a single post by ID
export async function getPostById(id: string) {
  return client.fetch(
    `*[_type == "post" && _id == $id][0]{
      _id,
      title,
      "description": body,
      "slug": slug.current,
      publishedAt,
      "image": mainImage
    }`,
    { id }
  );
}

// Legacy functions for backward compatibility (these can be removed later)
export const getAllBlogs = getAllPosts;
export const getBlogById = getPostById;