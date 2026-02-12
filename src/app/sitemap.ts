import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cakrapamungkas.org'
  
  // Define all your pages here
  const routes = [
    '',
    '/tentang',
    '/layanan',
    '/pusat-ilmu',
    '/kontak',
    '/download',
    '/padidoc',
    '/artikel/arsitektur-pertanian-indonesia',
    '/artikel/revolusi-agritech-4-0',
    '/artikel/subak-hingga-smart-farming',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
