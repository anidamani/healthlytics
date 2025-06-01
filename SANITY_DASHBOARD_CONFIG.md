# Sanity Dashboard & Studio Configuration

## Overview
This document outlines the configuration and setup of Sanity CMS dashboard and studio for the Healthlytics project.

## Current Configuration

### Environment Variables (.env.local)
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="xxx"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2025-06-01"
```

### Schema Types
The project includes the following content types:
- **Blog** (`blog`) - Main blog posts with title, slug, about, content, and images
- **Post** (`post`) - Secondary post type with categories and authors
- **Category** (`category`) - Content categorization
- **Author** (`author`) - Author information
- **Block Content** (`blockContent`) - Rich text content

### Studio Structure
The studio is organized with:
- Blogs (primary content type)
- Posts (secondary content type)
- Categories
- Authors

### Dashboard Integration
✅ **Completed Setup:**
1. ✅ Installed @sanity/dashboard plugin with recommended widgets
2. ✅ Added sanityTutorialsWidget for learning resources
3. ✅ Added projectInfoWidget for project overview
4. ✅ Added projectUsersWidget for team management
5. ✅ Added documentListWidget for recent content display
6. ✅ Added dashboard bridge script to studio layout
7. ✅ Extracted manifest files for dashboard integration
8. ✅ Deployed schema to Sanity for dashboard visibility
9. ✅ Configured proper API version and environment variables

## Dashboard Access

### Web Dashboard
- **URL**: [https://www.sanity.io/welcome](https://www.sanity.io/welcome)
- **Features**: 
  - Project overview and metrics
  - Deployed studios management
  - Team collaboration tools
  - Content insights and analytics

### Studio Dashboard
- **Local**: `http://localhost:3000/studio`
- **Features**:
  - Content editing interface
  - GROQ query testing with Vision tool
  - Real-time collaboration
  - Content preview and publishing

## Key Files & Configuration

### Studio Configuration (`sanity.config.ts`)
```typescript
export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    // Dashboard tool with recommended widgets - shows project overview and tutorials
    dashboardTool({
      widgets: [
        sanityTutorialsWidget(),
        projectInfoWidget(),
        projectUsersWidget({
          layout: { width: 'small' }
        }),
        // Recent blog posts
        documentListWidget({
          title: 'Recent Blog Posts',
          order: '_createdAt desc',
          types: ['blog'],
          limit: 5,
          showCreateButton: true,
          layout: { width: 'medium' }
        }),
        // Recent posts
        documentListWidget({
          title: 'Recent Posts', 
          order: '_createdAt desc',
          types: ['post'],
          limit: 5,
          showCreateButton: true,
          layout: { width: 'medium' }
        }),
      ]
    }),
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
```

### Studio Route (`app/studio/[[...tool]]/page.tsx`)
- Includes dashboard bridge script for web dashboard integration
- Uses Next.js catch-all routes for studio functionality
- Configured with force-static export for optimal performance

### CLI Configuration (`sanity.cli.ts`)
- Configured for CLI operations
- Uses environment variables for project and dataset identification

## Dashboard Features

### 1. Built-in Dashboard Widgets
- **Sanity Tutorials**: Quick access to helpful tutorials and guides
- **Project Info**: Overview of your project details and configuration
- **Project Users**: Team members and their roles
- **Recent Blog Posts**: Latest blog content with creation buttons
- **Recent Posts**: Latest posts with quick access

### 2. Content Management
- **Blog Posts**: Create, edit, and manage blog content
- **Categories**: Organize content with categories
- **Authors**: Manage author profiles and attribution
- **Media**: Handle image uploads and management

### 3. Schema Management
- **Type Definitions**: Flexible content modeling
- **Field Validation**: Ensure content quality
- **References**: Link related content types
- **Preview**: Configure content previews

### 4. Collaboration
- **Real-time Editing**: Multiple users can edit simultaneously
- **Comments**: Add comments and feedback on content
- **Revision History**: Track changes and revisions
- **Publishing Workflow**: Control content publication

### 5. Development Tools
- **Vision Plugin**: Test GROQ queries in real-time
- **Schema Inspector**: Explore content structure
- **API Explorer**: Test API endpoints
- **Webhooks**: Configure content change notifications

## Deployment & Access

### Development
```bash
# Start development server
npm run dev

# Access studio
http://localhost:3000/studio
```

### Production Deployment
1. Deploy to your hosting platform (Vercel, Netlify, etc.)
2. Ensure environment variables are set
3. Studio will be available at `https://yourdomain.com/studio`

### Dashboard Management
1. Visit [sanity.io/manage](https://sanity.io/manage) to manage project settings
2. Configure CORS settings for your domain
3. Add team members and set permissions
4. Monitor usage and analytics

## Best Practices

### Content Strategy
1. **Consistent Schema**: Keep content types consistent and well-documented
2. **Validation**: Use field validation to ensure content quality
3. **SEO**: Include meta fields for SEO optimization
4. **Images**: Use proper image optimization and alt text

### Development Workflow
1. **Schema Changes**: Test schema changes in development first
2. **Content Migration**: Plan content migrations carefully
3. **Backup**: Regular content backups recommended
4. **Version Control**: Keep schema definitions in version control

### Performance
1. **CDN Usage**: Enable CDN for better performance
2. **Caching**: Implement proper caching strategies
3. **Image Optimization**: Use Sanity's image transformation API
4. **Queries**: Optimize GROQ queries for performance

## Troubleshooting

### Common Issues
1. **Studio Not Loading**: Check environment variables and network connectivity
2. **Schema Errors**: Validate schema definitions and field types
3. **Permission Issues**: Verify user roles and project access
4. **API Limits**: Monitor API usage and rate limits

### Support Resources
- [Sanity Documentation](https://www.sanity.io/docs)
- [Community Forum](https://www.sanity.io/help)
- [GitHub Issues](https://github.com/sanity-io/sanity)
- [Discord Community](https://slack.sanity.io/)

## Next Steps

1. **Content Migration**: Complete migration from Strapi to Sanity
2. **Custom Widgets**: Consider adding custom dashboard widgets
3. **Webhooks**: Set up webhooks for content synchronization
4. **Analytics**: Implement content analytics and tracking
5. **Backup Strategy**: Implement automated content backups

---

**Last Updated**: June 1, 2025
**Sanity Version**: 3.90.0
**Next.js Version**: 15.2.1
