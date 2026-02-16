#!/bin/bash
# ==============================================
# Auto Deploy Script - cakrapamungkas.org
# Dipanggil otomatis oleh webhook saat push ke master
# ==============================================

set -e

APP_DIR="/root/cakrapamungkas-org"
LOG_FILE="$APP_DIR/logs/deploy.log"
LOCK_FILE="/tmp/deploy.lock"

# Fungsi logging
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Cek apakah sudah ada deploy yang jalan
if [ -f "$LOCK_FILE" ]; then
  log "SKIP: Deploy sedang berjalan, skip request ini."
  exit 0
fi

# Buat lock file
trap "rm -f $LOCK_FILE" EXIT
touch "$LOCK_FILE"

log "=========================================="
log "DEPLOY DIMULAI"
log "=========================================="

cd "$APP_DIR"

# 1. Pull perubahan terbaru
log "Step 1: Git pull dari origin master..."
git fetch origin master
git reset --hard origin/master
log "Git pull selesai."

# 2. Install dependencies (jika ada perubahan)
log "Step 2: Install dependencies..."
npm install --production=false
log "Dependencies terinstall."

# 3. Build project
log "Step 3: Build Next.js..."
npm run build
log "Build selesai."

# 4. Restart PM2
log "Step 4: Restart PM2..."
pm2 restart cakrapamungkas-org --update-env
log "PM2 restart selesai."

log "=========================================="
log "DEPLOY SELESAI SUKSES!"
log "=========================================="

# Hapus lock file
rm -f "$LOCK_FILE"
