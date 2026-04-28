import { MetadataRoute } from 'next'
import { articles, getArticleHref } from '@/data/articles'
import { commodities } from '@/data/commodities'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cakrapamungkas.org'

  const staticRoutes = [
    '',
    '/tentang',
    '/layanan',
    '/komoditas',
    '/pusat-ilmu',
    '/kontak',
    '/download',
    '/padidoc',
    '/artikel',
  ]

  const articleRoutes = articles.map((article) => getArticleHref(article.slug))
  const commodityRoutes = commodities.map((c) => `/komoditas/${c.slug}`)

  const allRoutes = [...staticRoutes, ...articleRoutes, ...commodityRoutes]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route === '/artikel' ? 0.9 : 0.8,
  }))
}
