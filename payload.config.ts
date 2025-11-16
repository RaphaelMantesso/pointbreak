import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'

export default buildConfig({
  admin: {
    user: 'users',
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      slug: 'hero',
      admin: {
        useAsTitle: 'title',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Hovedtittel',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          label: 'Undertittel',
        },
        {
          name: 'backgroundImage',
          type: 'text',
          required: true,
          label: 'Bakgrunnsbilde URL',
        },
      ],
    },
    {
      slug: 'courses',
      admin: {
        useAsTitle: 'name',
      },
      access: {
        read: () => true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Navn på Kurs/Destinasjon',
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Plassering',
        },
        {
          name: 'price',
          type: 'number',
          required: true,
          label: 'Pris (NOK)',
        },
        {
          name: 'availableSpots',
          type: 'number',
          required: true,
          label: 'Ledige Plasser',
        },
        {
          name: 'highlights',
          type: 'array',
          required: true,
          label: 'Høydepunkter',
          fields: [
            {
              name: 'highlight',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'image',
          type: 'text',
          required: true,
          label: 'Bilde URL',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Beskrivelse',
        },
        {
          name: 'duration',
          type: 'text',
          required: true,
          label: 'Varighet',
        },
      ],
    },
    {
      slug: 'posts',
      admin: {
        useAsTitle: 'title',
      },
      access: {
        read: () => true, // Allow public read access
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: [
            { label: 'SURF', value: 'SURF' },
            { label: 'REISE', value: 'REISE' },
          ],
        },
        {
          name: 'excerpt',
          type: 'textarea',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          name: 'image',
          type: 'text',
          required: true,
        },
        {
          name: 'publishedDate',
          type: 'date',
          required: true,
        },
      ],
    },
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/pointbreak',
  }),
})

