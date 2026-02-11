# cakrapamungkas.org

Official Website CV. Cakra Pamungkas Mandiri — Portal Ilmu Pertanian & Agribisnis Indonesia.

## Overview

Website ini dirancang sebagai **portal edukasi pertanian** dengan fokus pada konten artikel berkualitas tinggi, analisis data sektor pertanian, dan panduan praktis untuk pelaku agribisnis. Selain sebagai media edukasi, website ini juga menyediakan informasi tentang layanan jasa maklon, perdagangan gabah, dan sarana produksi pertanian.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** (icons)
- **PM2** (production process manager)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Deployment

```bash
npm run build
pm2 restart cakrapamungkas-org
```

## Pages Structure

- `/` — **Beranda** (Portal editorial dengan featured artikel, data insights, grid artikel terbaru)
- `/tentang` — **Tentang Kami** (Profil perusahaan, visi misi, tim, legalitas)
- `/layanan` — **Layanan** (Jasa Maklon Gabah, Jual Beli Gabah, Saprotan)
- `/pusat-ilmu` — **Pusat Ilmu** (Blog & artikel edukasi pertanian)
- `/download` — **Download Area** (Template surat, panduan, dokumen)
- `/kontak` — **Kontak** (Form kontak & informasi perusahaan)
- `/padidoc` — **PadiDoc Info** (Coming soon / maintenance page untuk aplikasi PadiDoc)

## Content Structure

### Artikel
Folder `content/artikel/` berisi artikel-artikel mendalam tentang pertanian Indonesia:
- **pertanian modern** - Arsitektur Pertanian Indonesia: analisis komprehensif dari sejarah hingga teknologi Agritech 4.0

### Download Resources
- `content/basic-pertanian/` - SOP dan checklist dasar pertanian
- `content/scale-pertanian/` - Template untuk scale-up agribisnis
- `content/auto-pilot-pertanian/` - Template otomasi bisnis pertanian

## Key Features

### Homepage Editorial Style
- **Featured Article** dengan preview konten
- **Data Highlights** (kontribusi PDB, tenaga kerja, produksi)
- **Latest Articles Grid** dengan kategori dan estimasi waktu baca
- **Subtle Services Section** (non-salesy approach)

### SEO Optimized
- Server-side rendering dengan Next.js
- Metadata optimization
- Static generation untuk performa maksimal

### Mobile Responsive
- Fully responsive design
- Optimized untuk semua device size

## Related Projects

- **PadiDoc App** — Aplikasi manajemen penggilingan padi (internal link: `/padidoc`)

## Environment

- Node.js 18+
- npm or yarn
- PM2 (for production)

## Git Repository

https://github.com/rcz87/cakrapamungkas-org

## License

© 2026 CV. Cakra Pamungkas Mandiri. All rights reserved.
