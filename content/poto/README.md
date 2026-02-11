# Folder Poto/Gambar

Folder ini digunakan untuk menyimpan foto dan gambar yang akan digunakan di website.

## Struktur yang Disarankan

```
content/poto/
├── artikel/          # Gambar untuk artikel blog
├── layanan/          # Gambar untuk halaman layanan
├── produk/           # Gambar produk (gabah, beras, dll)
├── tim/              # Foto tim/karyawan
├── banner/           # Banner/hero images
└── icon/             # Icon/logo custom
```

## Format File yang Disarankan

- **Format:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **Size:** Optimal < 500KB per gambar
- **Naming:** gunakan lowercase dan dash
  - ✅ Good: `beras-premium-2024.jpg`
  - ❌ Bad: `Beras Premium 2024.JPG`

## Cara Menggunakan di Website

### 1. Upload Gambar
Upload file gambar ke folder ini atau subfolder yang sesuai.

### 2. Reference di Code
```jsx
// Di Next.js/React component
import Image from 'next/image';

<Image 
  src="/content/poto/artikel/pertanian-modern.jpg" 
  alt="Pertanian Modern"
  width={800}
  height={600}
/>
```

### 3. Di Public Folder (Alternatif)
Untuk akses langsung via URL, bisa juga simpan di folder `public/`:
```
public/images/...
```
Lalu akses: `https://cakrapamungkas.org/images/nama-file.jpg`

## Tips Optimasi

1. **Compress gambar** sebelum upload (gunakan TinyPNG, Squoosh)
2. **Gunakan WebP** untuk performa lebih baik
3. **Responsive images** - siapkan beberapa ukuran
4. **Alt text** - selalu berikan deskripsi untuk SEO

## Catatan

- Folder ini di-track oleh Git
- Maksimal ukuran file per gambar: **2MB**
- Untuk file sangat besar, pertimbangkan CDN external
