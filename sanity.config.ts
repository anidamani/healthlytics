'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {dashboardTool, projectInfoWidget, projectUsersWidget, sanityTutorialsWidget} from '@sanity/dashboard'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
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
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
