import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mern-docs.vercel.app'
  
  // Get current date for lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Topic 1 - HTML & CSS
    {
      url: `${baseUrl}/topic-1`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-1/html`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-1/css`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 2 - JavaScript
    {
      url: `${baseUrl}/topic-2`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-2/javascript`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 3 - React
    {
      url: `${baseUrl}/topic-3`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-3/react`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 4 - Tailwind CSS
    {
      url: `${baseUrl}/topic-4`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-4/tailwind`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 5 - Next.js
    {
      url: `${baseUrl}/topic-5`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-5/nextjs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 6 - MongoDB
    {
      url: `${baseUrl}/topic-6`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-6/mongodb-setup`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-6/mongodb-basics`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-6/mongodb-nodejs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Topic 7 - Node.js
    {
      url: `${baseUrl}/topic-7`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topic-7/nodejs-setup`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-7/fundamentals`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-7/modules-npm`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-7/api-development`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/topic-7/best-practices`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
