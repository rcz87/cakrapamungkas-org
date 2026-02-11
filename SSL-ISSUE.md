# ⚠️ Masalah SSL Certificate - DNS Conflict

## 🔍 Masalah Terdeteksi

DNS domain **cakrapamungkas.org** menunjukkan **2 IP address**:
```
212.85.26.253  ← IP VPS yang BENAR ✅
34.111.179.208 ← IP lain (SALAH) ❌
```

Let's Encrypt mencoba verifikasi dari IP `34.111.179.208` yang memberikan error 500.

## 📊 Verifikasi Masalah

Jalankan command ini:
```bash
dig cakrapamungkas.org +short
```

Hasilnya:
```
212.85.26.253
34.111.179.208  ← IP ini tidak seharusnya ada!
```

## 🔧 Solusi: Perbaiki DNS

### Kemungkinan Penyebab:

#### 1️⃣ **Ada 2 A Record untuk @ (root domain)**

Di DNS provider, cek apakah ada 2 record:
```
Type: A, Name: @, Value: 212.85.26.253  ← PERTAHANKAN INI
Type: A, Name: @, Value: 34.111.179.208 ← HAPUS INI
```

**Solusi:** Hapus A record yang mengarah ke `34.111.179.208`

---

#### 2️⃣ **Cloudflare Proxy Aktif (Orange Cloud)**

Jika menggunakan Cloudflare dan proxy status = "Proxied" (orange cloud):
```
┌────────┬──────┬─────────────────┬──────┬──────────────┐
│  Type  │ Name │     Content     │ TTL  │    Proxy     │
├────────┼──────┼─────────────────┼──────┼──────────────┤
│   A    │  @   │ 212.85.26.253   │ Auto │ 🟠 Proxied  │ ← UBAH INI
└────────┴──────┴─────────────────┴──────┴──────────────┘
```

**Solusi:** Klik orange cloud untuk mengubahnya jadi "DNS Only" (abu-abu)
```
┌────────┬──────┬─────────────────┬──────┬──────────────┐
│  Type  │ Name │     Content     │ TTL  │    Proxy     │
├────────┼──────┼─────────────────┼──────┼──────────────┤
│   A    │  @   │ 212.85.26.253   │ Auto │ ⚪ DNS Only │ ← HARUSNYA BEGINI
└────────┴──────┴─────────────────┴──────┴──────────────┘
```

---

#### 3️⃣ **DNS di Domain Registrar Masih Mengarah ke Tempat Lain**

Pastikan nameserver domain Anda mengarah ke DNS provider yang benar.

**Cek nameserver:**
```bash
dig cakrapamungkas.org NS
```

Jika nameserver tidak sesuai, update di domain registrar.

---

## ✅ Langkah-langkah Perbaikan

### 1. Login ke DNS Provider

Login ke tempat Anda mengelola DNS (Cloudflare/Namecheap/GoDaddy/dll)

### 2. Cek A Records

Lihat semua A record untuk `@` (root domain):
- **Jika ada 2 A record:** Hapus yang mengarah ke `34.111.179.208`
- **Jika Cloudflare proxy aktif:** Ubah ke DNS Only (matikan orange cloud)

### 3. Pastikan Hanya 1 A Record

Seharusnya hanya ada:
```
Type: A
Name: @
Value: 212.85.26.253
Proxy: OFF / DNS Only
```

Dan untuk www:
```
Type: A
Name: www
Value: 212.85.26.253
Proxy: OFF / DNS Only
```

### 4. Save Changes

Simpan perubahan di DNS provider.

### 5. Tunggu DNS Propagation

Tunggu 5-15 menit agar DNS update.

### 6. Verifikasi

Di VPS, jalankan:
```bash
dig cakrapamungkas.org +short
```

Hasilnya HARUS hanya menunjukkan:
```
212.85.26.253
```

**Jika masih muncul 2 IP, tunggu lebih lama atau clear DNS cache.**

### 7. Test Ulang SSL

Setelah DNS fix, jalankan:
```bash
sudo certbot certonly --webroot -w /var/www/html \
  -d cakrapamungkas.org -d www.cakrapamungkas.org \
  --non-interactive --agree-tos --email admin@cakrapamungkas.org
```

---

## 🔍 Screenshot untuk Cloudflare Users

Jika menggunakan Cloudflare, pastikan tampilannya seperti ini:

**❌ SALAH (Proxied):**
```
Status: 🟠 Proxied
```

**✅ BENAR (DNS Only):**
```
Status: ⚪ DNS Only
```

Klik pada icon cloud orange untuk mengubahnya menjadi abu-abu (DNS Only).

---

## 📞 Masih Belum Solved?

1. **Screenshot** DNS records Anda
2. Pastikan tidak ada duplicate A record
3. Pastikan proxy/CDN dimatikan (jika ada)
4. Clear DNS cache:
   ```bash
   sudo systemd-resolve --flush-caches
   ```

---

## 🎯 Quick Checklist

- [ ] Hanya ada 1 A record untuk `@` → `212.85.26.253`
- [ ] Hanya ada 1 A record untuk `www` → `212.85.26.253`
- [ ] Proxy status = OFF / DNS Only (jika Cloudflare)
- [ ] Nameserver mengarah ke DNS provider yang benar
- [ ] `dig cakrapamungkas.org +short` hanya menunjukkan 1 IP
- [ ] Tunggu 5-15 menit setelah perubahan DNS

Setelah semua checklist ✅, SSL certificate bisa di-generate!

---

**NOTE:** IP `34.111.179.208` sepertinya IP Google Cloud. Mungkin ada konfigurasi lama atau proxy yang belum dimatikan.
