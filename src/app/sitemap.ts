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
    '/artikel/analisis-strategis-kementan-2026',
    '/artikel/transformasi-agraria-2026',
    '/artikel/arsitektur-pertanian-indonesia',
    '/artikel/revolusi-agritech-4-0',
    '/artikel/subak-hingga-smart-farming',
    '/artikel/petani-milenial',
    '/artikel/program-swasembada-2025',
    '/artikel/ekspor-kopi-indonesia',
    '/artikel/adaptasi-perubahan-iklim',
    '/artikel/budidaya-gap-padi',
    '/artikel/defisiensi-nutrisi-padi',
    '/artikel/manajemen-risiko-agribisnis',
    '/artikel/break-even-point-usaha-tani',
    '/artikel/program-pemerintah-2026',
    '/artikel/asuransi-usaha-tani-padi',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
