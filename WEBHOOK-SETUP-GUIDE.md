# Setup Auto-Deploy Webhook - cakrapamungkas.org

Setiap kali push ke branch `master`, website otomatis update tanpa perlu buka terminal.

## Cara Kerja

```
Push ke master → GitHub kirim webhook → Server terima → Pull, Build, Restart → Selesai!
```

## Langkah Setup di Server (VPS)

### 1. Buat Webhook Secret

Buka terminal VPS, generate secret random:

```bash
openssl rand -hex 32
```

**Catat hasilnya!** Nanti dipakai di GitHub dan di server.

### 2. Update Ecosystem Config

Edit file `ecosystem.config.js`, ganti `GANTI_DENGAN_SECRET_KAMU` dengan secret yang tadi:

```bash
nano /root/cakrapamungkas-org/ecosystem.config.js
```

Cari bagian:
```js
WEBHOOK_SECRET: 'GANTI_DENGAN_SECRET_KAMU'
```

Ganti dengan secret yang sudah di-generate.

### 3. Pastikan Deploy Script Executable

```bash
chmod +x /root/cakrapamungkas-org/deploy.sh
```

### 4. Buat Folder Logs

```bash
mkdir -p /root/cakrapamungkas-org/logs
```

### 5. Jalankan Webhook Server dengan PM2

```bash
cd /root/cakrapamungkas-org
pm2 start ecosystem.config.js
pm2 save
```

Cek status:
```bash
pm2 status
```

Harus muncul 2 app: `cakrapamungkas-org` dan `webhook-server`.

### 6. Setup Nginx

Edit config Nginx:

```bash
sudo nano /etc/nginx/sites-available/cakrapamungkas
```

Tambahkan di dalam **server block HTTPS (port 443)**, sebelum closing `}`:

```nginx
    # Webhook endpoint untuk auto-deploy
    location /webhook {
        proxy_pass http://127.0.0.1:9000/webhook;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Hub-Signature-256 $http_x_hub_signature_256;
        proxy_set_header X-GitHub-Event $http_x_github_event;
        proxy_set_header X-GitHub-Delivery $http_x_github_delivery;
        proxy_read_timeout 300s;
    }
```

Test dan reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Test Webhook Server

```bash
curl http://localhost:9000/health
```

Harus return: `{"status":"ok","timestamp":"..."}`

Test dari luar:
```bash
curl https://cakrapamungkas.org/webhook-health
```

---

## Langkah Setup di GitHub

### 1. Buka Repository di GitHub

Pergi ke: **Settings** → **Webhooks** → **Add webhook**

### 2. Isi Form Webhook

| Field | Isi |
|-------|-----|
| **Payload URL** | `https://cakrapamungkas.org/webhook` |
| **Content type** | `application/json` |
| **Secret** | *(secret yang tadi di-generate)* |
| **SSL verification** | Enable SSL verification |
| **Events** | Just the push event |
| **Active** | Centang |

### 3. Klik "Add webhook"

GitHub akan mengirim test ping. Cek di tab **Recent Deliveries** — harus status 200.

---

## Cara Pakai

Setelah setup selesai, tinggal:

1. **Push ke master** — dari mana saja (laptop, HP, GitHub web)
2. **Tunggu ~1-2 menit** — server otomatis pull, build, restart
3. **Selesai!** — website sudah terupdate

---

## Monitoring & Troubleshooting

### Cek Log Deploy

```bash
# Log webhook server
pm2 logs webhook-server

# Log deploy script
tail -f /root/cakrapamungkas-org/logs/deploy.log

# Log webhook requests
tail -f /root/cakrapamungkas-org/logs/webhook.log
```

### Cek Status PM2

```bash
pm2 status
```

### Manual Deploy (jika webhook bermasalah)

```bash
cd /root/cakrapamungkas-org
bash deploy.sh
```

### Restart Webhook Server

```bash
pm2 restart webhook-server
```

### Common Issues

| Masalah | Solusi |
|---------|--------|
| GitHub delivery gagal 502 | Cek `pm2 status`, pastikan webhook-server running |
| Deploy gagal build | Cek `logs/deploy.log`, biasanya error di `npm run build` |
| Signature invalid | Pastikan secret di GitHub = secret di ecosystem.config.js |
| Deploy terlalu lama | Timeout 5 menit, cek disk space dan memory VPS |

---

## File yang Ditambahkan

| File | Fungsi |
|------|--------|
| `deploy.sh` | Script auto-deploy (pull, install, build, restart) |
| `webhook-server.js` | HTTP server yang menerima webhook dari GitHub |
| `ecosystem.config.js` | PM2 config (updated, tambah webhook-server) |
| `nginx-webhook.conf` | Template Nginx config untuk webhook |
