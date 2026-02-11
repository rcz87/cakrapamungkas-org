# 🚀 Panduan Deployment cakrapamungkas.org

## ✅ Status Deployment

**Website sudah SIAP dan RUNNING di VPS!**

- ✅ Build production berhasil
- ✅ PM2 process manager aktif (port 3001)
- ✅ Nginx configuration terpasang
- ✅ PadiDoc tetap aman di subdomain (port 5000)

---

## 📋 Aplikasi yang Running

| Aplikasi | Port | Domain | Status |
|----------|------|--------|--------|
| **cakrapamungkas-org** | 3001 | cakrapamungkas.org | ✅ Online |
| **PadiDoc** | 5000 | padidoc.cakrapamungkas.org | ✅ Online (SSL) |
| **n8n** | 5678 | n8n.cakrapamungkas.org | ✅ Online (SSL) |

---

## 🌐 LANGKAH WAJIB: Setup DNS

### 1️⃣ Setting DNS di Domain Provider

Login ke domain provider Anda (Cloudflare/Namecheap/GoDaddy/dll) dan tambahkan DNS record:

#### **A Record untuk Domain Utama**
```
Type: A
Name: @ (atau kosong untuk root domain)
Value: 212.85.26.253
TTL: Auto atau 3600
Proxy: Disabled (jika di Cloudflare, matikan orange cloud dulu)
```

#### **A Record untuk www (opsional tapi direkomendasikan)**
```
Type: A
Name: www
Value: 212.85.26.253
TTL: Auto atau 3600
Proxy: Disabled (jika di Cloudflare)
```

#### **PENTING: Jangan Ubah DNS untuk Subdomain yang Sudah Ada**
- ✅ `padidoc.cakrapamungkas.org` → **BIARKAN APA ADANYA**
- ✅ `n8n.cakrapamungkas.org` → **BIARKAN APA ADANYA**

---

### 2️⃣ Verifikasi DNS Propagation

Tunggu 5-15 menit, lalu cek apakah DNS sudah propagate:

```bash
# Cek dari VPS
dig cakrapamungkas.org +short

# Atau gunakan website
# https://dnschecker.org
```

Jika sudah menunjukkan IP `212.85.26.253`, lanjut ke langkah berikutnya.

---

### 3️⃣ Test Akses Website (HTTP)

Buka di browser:
```
http://cakrapamungkas.org
http://www.cakrapamungkas.org (jika sudah setup www)
```

Website seharusnya sudah bisa diakses (tanpa HTTPS dulu).

---

## 🔒 Setup SSL Certificate (HTTPS)

### 1️⃣ Install Certbot (jika belum ada)

```bash
# Certbot sudah terinstall di VPS ini
certbot --version
```

### 2️⃣ Generate SSL Certificate

```bash
sudo certbot certonly --nginx -d cakrapamungkas.org -d www.cakrapamungkas.org
```

**Ikuti instruksi:**
- Masukkan email untuk notifikasi
- Setujui Terms of Service
- Certificate akan otomatis tersimpan di `/etc/letsencrypt/live/cakrapamungkas.org/`

### 3️⃣ Enable HTTPS di Nginx

Edit file nginx config:

```bash
sudo nano /etc/nginx/sites-available/cakrapamungkas
```

**Uncomment semua bagian HTTPS** (hapus tanda `#` di depan):
- Dari baris `# server {` untuk HTTPS
- Sampai closing `# }` di bagian HTTPS

**Jangan lupa comment/hapus bagian temporary proxy di HTTP:**
- Comment/hapus bagian:
  ```nginx
  # Temporary proxy to application (before SSL)
  location / {
      proxy_pass http://localhost:3001;
      ...
  }
  ```
- Uncomment bagian redirect HTTPS:
  ```nginx
  location / {
      return 301 https://$server_name$request_uri;
  }
  ```

### 4️⃣ Test dan Reload Nginx

```bash
# Test konfigurasi
sudo nginx -t

# Jika OK, reload nginx
sudo systemctl reload nginx
```

### 5️⃣ Verifikasi HTTPS

Buka di browser:
```
https://cakrapamungkas.org
https://www.cakrapamungkas.org
```

✅ Website seharusnya sudah running dengan SSL/HTTPS!

---

## 🔄 Auto-Renewal SSL

Certbot akan otomatis renew certificate sebelum expired. Test auto-renewal:

```bash
sudo certbot renew --dry-run
```

---

## 🎯 Command Berguna

### PM2 Management

```bash
# Lihat status aplikasi
pm2 list

# Lihat logs
pm2 logs cakrapamungkas-org

# Restart aplikasi
pm2 restart cakrapamungkas-org

# Stop aplikasi
pm2 stop cakrapamungkas-org

# Start aplikasi
pm2 start cakrapamungkas-org
```

### Nginx Management

```bash
# Test konfigurasi
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Restart nginx
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx
```

### Update Website

Jika ada perubahan code:

```bash
cd /root/cakrapamungkas-org

# Pull changes (jika dari git)
git pull

# Install dependencies (jika ada perubahan)
npm install

# Rebuild
npm run build

# Restart PM2
pm2 restart cakrapamungkas-org
```

---

## 📊 Monitoring

### Check Application Status

```bash
# PM2 monitoring
pm2 monit

# Check ports
netstat -tlnp | grep -E "(3001|5000)"

# Check logs
pm2 logs cakrapamungkas-org --lines 50
```

### Check Nginx Logs

```bash
# Access logs
tail -f /var/log/nginx/access.log

# Error logs
tail -f /var/log/nginx/error.log
```

---

## 🔧 Troubleshooting

### Website tidak bisa diakses
1. Cek PM2 status: `pm2 list`
2. Cek logs: `pm2 logs cakrapamungkas-org`
3. Cek nginx status: `sudo systemctl status nginx`
4. Cek port: `netstat -tlnp | grep 3001`

### SSL tidak bekerja
1. Pastikan DNS sudah propagate
2. Cek certificate: `sudo certbot certificates`
3. Cek nginx config: `sudo nginx -t`

### PadiDoc tidak bisa diakses
- **JANGAN PANIK!** PadiDoc running di port berbeda (5000)
- Cek: `pm2 list` - PadiDoc harus tetap online
- Cek: `curl -I https://padidoc.cakrapamungkas.org`

---

## 📞 Kontak

Jika ada masalah, hubungi administrator VPS.

**IP Server:** 212.85.26.253
**Lokasi Code:** /root/cakrapamungkas-org
**PM2 Config:** /root/cakrapamungkas-org/ecosystem.config.js
**Nginx Config:** /etc/nginx/sites-available/cakrapamungkas

---

## ✅ Checklist Deployment

- [x] Build production
- [x] Setup PM2
- [x] Configure Nginx
- [ ] **Setup DNS A Record** ← **ANDA DI SINI**
- [ ] Verify HTTP access
- [ ] Setup SSL Certificate
- [ ] Enable HTTPS di nginx
- [ ] Verify HTTPS access
- [ ] Test semua halaman website
- [ ] Verify PadiDoc masih running

---

**🎉 Selamat! Website cakrapamungkas.org siap diluncurkan!**
