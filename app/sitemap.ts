import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://contrib.nigerianschuls.com/dashboard',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://contrib.nigerianschuls.com/projects',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://contrib.nigerianschuls.com/profile',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://contrib.nigerianschuls.com/settings',
      lastModified: new Date().toISOString(),
    },
  ]
}