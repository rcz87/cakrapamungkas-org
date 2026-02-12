# 📸 Cara Upload Gambar ke VS Code

## Metode 1: Drag & Drop (Paling Mudah)

1. **Buka Folder di VS Code Explorer** (sidebar kiri)
   - Klik folder `public/images/`

2. **Drag & Drop**
   - Buka File Explorer di komputer Anda
   - Cari gambar "petani manggul bibit"
   - **Drag** gambar tersebut dari File Explorer
   - **Drop** langsung ke folder `public/images/` di VS Code

3. **Rename file** (opsional)
   - Klik kanan file → Rename
   - Ganti nama jadi: `petani-manggul-bibit.jpg`

---

## Metode 2: Upload via Terminal

1. **Buka Terminal di VS Code**
   - Menu: Terminal → New Terminal
   - Atau tekan: `` Ctrl + ` ``

2. **Gunakan Command untuk Upload**
   ```bash
   # Upload via scp (dari komputer lokal)
   scp /path/to/gambar-petani.jpg root@YOUR_IP:/root/cakrapamungkas-org/public/images/petani-manggul-bibit.jpg
   ```

---

## Metode 3: Upload via File Menu

1. **Klik Kanan pada Folder**
   - Di VS Code Explorer, klik kanan folder `public/images/`
   - Pilih **"Upload..."**

2. **Pilih File**
   - Browse file gambar di komputer Anda
   - Klik **Open**

---

## Metode 4: Copy-Paste (Windows/Mac)

1. **Copy file di File Explorer**
   - Klik kanan gambar → Copy (atau Ctrl+C)

2. **Paste di VS Code**
   - Buka folder `public/images/` di VS Code
   - Klik kanan di folder → Paste (atau Ctrl+V)

---

## Setelah Upload Berhasil:

1. **Verifikasi file ada**
   ```bash
   ls -lh /root/cakrapamungkas-org/public/images/petani-manggul-bibit.jpg
   ```

2. **Beri tahu saya**, maka saya akan:
   - Update artikel menggunakan gambar baru
   - Rebuild aplikasi
   - Deploy ke production

---

## 💡 Tips:

- **Format yang didukung:** .jpg, .jpeg, .png, .webp
- **Ukuran optimal:** 500KB - 3MB
- **Resolusi recommended:** 1920x1080 atau lebih
- **Nama file:** hindari spasi, gunakan dash (-) atau underscore (_)

---

## Jika Kesulitan:

Alternatif lain:
1. **Upload ke Google Drive** → Share link → Saya download
2. **Upload ke GitHub** → Saya pull
3. **Gunakan gambar yang sudah ada** (desa-petani.png sudah bagus)

Silakan pilih metode yang paling mudah untuk Anda! 🚀
