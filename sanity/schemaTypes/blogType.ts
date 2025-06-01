import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'about',
      type: 'text',
      title: 'About',
      description: 'A short summary of the blog post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Main image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      type: 'blockContent',
      title: 'Blog Content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
})