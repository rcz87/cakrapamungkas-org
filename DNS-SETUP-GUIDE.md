# 🌐 Panduan Setup DNS - cakrapamungkas.org

## 📝 Isi Field DNS Record

### Record 1️⃣: Domain Utama (cakrapamungkas.org)

```
┌─────────────────────────────────────────────────┐
│ Type:   A                                       │
│ Name:   @     ← ISI INI DENGAN @ (atau kosong) │
│ Value:  212.85.26.253                           │
│ TTL:    3600  (atau Auto)                       │
│ Proxy:  Disabled/OFF (jika ada)                 │
└─────────────────────────────────────────────────┘
```

**Penjelasan Name untuk Domain Utama:**
- Di **Cloudflare**: Isi dengan **`@`**
- Di **Namecheap**: Isi dengan **`@`**
- Di **GoDaddy**: Isi dengan **`@`** atau kosongkan
- Di **Niagahoster/Rumahweb**: Isi dengan **`@`** atau kosongkan

**Simbol `@` = domain utama / root domain**

---

### Record 2️⃣: WWW (www.cakrapamungkas.org)

```
┌─────────────────────────────────────────────────┐
│ Type:   A                                       │
│ Name:   www   ← ISI INI DENGAN: www            │
│ Value:  212.85.26.253                           │
│ TTL:    3600  (atau Auto)                       │
│ Proxy:  Disabled/OFF (jika ada)                 │
└─────────────────────────────────────────────────┘
```

**Penjelasan Name untuk WWW:**
- Semua provider: Isi dengan **`www`**

---

## 📸 Contoh Visual per Provider

### ☁️ Cloudflare

```
Add record:
┌─────────┬──────┬─────────────────┬──────┬───────────┐
│  Type   │ Name │      Content    │ TTL  │   Proxy   │
├─────────┼──────┼─────────────────┼──────┼───────────┤
│    A    │  @   │ 212.85.26.253   │ Auto │ 🔘 OFF    │
│    A    │ www  │ 212.85.26.253   │ Auto │ 🔘 OFF    │
└─────────┴──────┴─────────────────┴──────┴───────────┘
```

**❌ JANGAN edit yang sudah ada:**
```
┌─────────┬──────────┬─────────────────┬──────┬────────┐
│    A    │ padidoc  │ xxx.xxx.xxx.xxx │ Auto │  OFF   │ ← JANGAN DIUBAH!
│    A    │   n8n    │ xxx.xxx.xxx.xxx │ Auto │  OFF   │ ← JANGAN DIUBAH!
└─────────┴──────────┴─────────────────┴──────┴────────┘
```

---

### 🔷 Namecheap

```
Advanced DNS > Add New Record:
┌────────────┬────────────────┬────────────────┬──────────┐
│    Type    │      Host      │      Value     │   TTL    │
├────────────┼────────────────┼────────────────┼──────────┤
│  A Record  │       @        │ 212.85.26.253  │ Automatic│
│  A Record  │      www       │ 212.85.26.253  │ Automatic│
└────────────┴────────────────┴────────────────┴──────────┘
```

---

### 🌍 GoDaddy

```
DNS Management > Add Record:
┌────────┬──────────────┬─────────────────┬──────┐
│  Type  │     Name     │      Value      │ TTL  │
├────────┼──────────────┼─────────────────┼──────┤
│   A    │      @       │ 212.85.26.253   │ 3600 │
│   A    │     www      │ 212.85.26.253   │ 3600 │
└────────┴──────────────┴─────────────────┴──────┘
```

---

### 🇮🇩 Niagahoster / Rumahweb

```
Zone Editor > Add Record:
┌────────┬──────────────┬─────────────────┬──────┐
│  Type  │     Name     │   IPv4 Address  │ TTL  │
├────────┼──────────────┼─────────────────┼──────┤
│   A    │      @       │ 212.85.26.253   │ 3600 │
│   A    │     www      │ 212.85.26.253   │ 3600 │
└────────┴──────────────┴─────────────────┴──────┘
```

---

## ✅ Ringkasan Isian

| Field | Isi untuk Domain Utama | Isi untuk WWW |
|-------|------------------------|---------------|
| **Type** | A | A |
| **Name/Host** | **@** (atau kosong) | **www** |
| **Value/Content** | 212.85.26.253 | 212.85.26.253 |
| **TTL** | 3600 atau Auto | 3600 atau Auto |
| **Proxy** (Cloudflare) | OFF/Disabled | OFF/Disabled |

---

## 🔍 Cara Verifikasi DNS Sudah Benar

### Dari VPS (setelah 5-15 menit):

```bash
# Cek domain utama
dig cakrapamungkas.org +short
# Harusnya muncul: 212.85.26.253

# Cek www
dig www.cakrapamungkas.org +short
# Harusnya muncul: 212.85.26.253
```

### Dari Browser:

Buka: https://dnschecker.org
- Masukkan: `cakrapamungkas.org`
- Pilih: A Record
- Klik: Search
- **Hasilnya harus:** 212.85.26.253 di berbagai lokasi

---

## ⚠️ Checklist Sebelum Simpan

- [ ] Type = **A** (bukan CNAME, bukan MX)
- [ ] Name untuk domain utama = **@** atau kosong
- [ ] Name untuk www = **www**
- [ ] Value/IP = **212.85.26.253** (IP VPS)
- [ ] TTL = 3600 atau Auto (bebas)
- [ ] Proxy = OFF/Disabled (jika Cloudflare)
- [ ] **TIDAK mengubah** record `padidoc` yang sudah ada
- [ ] **TIDAK mengubah** record `n8n` yang sudah ada

---

## 🚨 Yang JANGAN Dilakukan

❌ **JANGAN** edit/ubah record `padidoc.cakrapamungkas.org`  
❌ **JANGAN** edit/ubah record `n8n.cakrapamungkas.org`  
❌ **JANGAN** hapus record yang sudah ada  
❌ **JANGAN** gunakan Type CNAME untuk `@` (root domain)  
✅ **HANYA tambahkan** record BARU untuk `@` dan `www`  

---

## 📞 Troubleshooting

### "Field Name tidak bisa dikosongkan"
→ Isi dengan `@`

### "Invalid hostname"
→ Pastikan menggunakan `@` bukan `cakrapamungkas.org`

### "Record already exists"
→ Cek apakah sudah ada record dengan Name `@`
→ Jika ada, edit record tersebut untuk mengganti IP-nya

### "Proxy status"
→ Jika di Cloudflare, set ke OFF/DNS Only (bukan Proxied/orange)

---

## 🎯 Langkah Selanjutnya Setelah DNS Setup

1. ✅ Tambahkan 2 record DNS (@ dan www)
2. ⏳ Tunggu 5-15 menit (DNS propagation)
3. 🔍 Verifikasi dengan `dig` atau dnschecker.org
4. 🌐 Buka http://cakrapamungkas.org di browser
5. 🔒 Setup SSL certificate dengan certbot
6. 🎉 Website live dengan HTTPS!

Detail lengkap ada di: **DEPLOYMENT-GUIDE.md**

---

**📌 Kesimpulan: Name diisi dengan `@` untuk domain utama, dan `www` untuk subdomain www**
