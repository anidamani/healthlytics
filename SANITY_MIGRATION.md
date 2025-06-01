# Migrating from Strapi to Sanity CMS

## Overview
This document outlines the steps taken to migrate the blog functionality from Strapi CMS to Sanity.io.

## Completed Steps
1. Installed Sanity dependencies:
   - @sanity/client
   - @sanity/image-url
   - next-sanity

2. Created Sanity configuration files:
   - `/app/lib/sanity.ts` - Client configuration and data fetching functions
   - `/app/lib/schema.ts` - Content schema definition
   - `/sanity.config.ts` - Project configuration
   - `/app/studio/[[...index]]/page.tsx` - Sanity Studio setup

3. Updated components to use Sanity instead of Strapi:
   - `/app/blogs/page.tsx`
   - `/app/blogs/[id]/page.tsx`
   - `/app/components/Home/Blogs.tsx`
   - `/app/components/Home/BlogCard.tsx`

## Remaining Steps

1. **Create a Sanity Project**:
   - Go to [sanity.io](https://www.sanity.io/) and create a new project
   - Replace `'your-project-id'` in `sanity.ts` and `sanity.config.ts` with your actual project ID

2. **Deploy Sanity Studio**:
   - Run `npm run dev` to start the development server
   - Navigate to `/studio` to access the Sanity Studio

3. **Content Migration**:
   - Export content from Strapi (you can use Strapi's API to fetch all content)
   - Transform the data to match Sanity's schema format
   - Import the transformed data into Sanity using the Sanity client

4. **Test the Implementation**:
   - Verify that all blog pages load correctly
   - Check that images are displaying properly
   - Test pagination and filtering if applicable

## Content Migration Script Example

```typescript
// Example script to migrate content from Strapi to Sanity
import { createClient } from '@sanity/client'

// Initialize Sanity client
const sanityClient = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  token: 'your-sanity-write-token', // You'll need a write token
  useCdn: false,
})

async function migrateContent() {
  // Fetch data from Strapi
  const response = await fetch('https://clever-presence-a67cb10add.strapiapp.com/api/blogs?populate=image')
  const strapiData = await response.json()
  
  // Transform and import each blog post
  for (const strapiPost of strapiData.data) {
    // Transform Strapi data to Sanity format
    const sanityPost = {
      _type: 'blog',
      title: strapiPost.title,
      about: strapiPost.about,
      slug: {
        _type: 'slug',
        current: strapiPost.title.toLowerCase().replace(/\s+/g, '-'),
      },
      // Handle image migration separately
      // You'll need to download and upload images to Sanity
      publishedAt: new Date().toISOString(),
    }
    
    // Create document in Sanity
    await sanityClient.create(sanityPost)
  }
  
  console.log('Migration completed!')
}

migrateContent().catch(console.error)
```

## Resources
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Integration](https://www.sanity.io/docs/next-js)
- [Sanity Image URL Builder](https://www.sanity.io/docs/image-url)