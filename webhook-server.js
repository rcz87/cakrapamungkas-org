// ==============================================
// GitHub Webhook Server - cakrapamungkas.org
// Auto deploy saat push ke master
// Port: 9000
// ==============================================

const http = require('http');
const crypto = require('crypto');
const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

// Konfigurasi
const PORT = 9000;
const DEPLOY_SCRIPT = '/root/cakrapamungkas-org/deploy.sh';
const LOG_DIR = '/root/cakrapamungkas-org/logs';
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || '';
const ALLOWED_BRANCH = 'refs/heads/main';

// Pastikan folder logs ada
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(logMessage.trim());
  fs.appendFileSync(path.join(LOG_DIR, 'webhook.log'), logMessage);
}

// Verifikasi signature dari GitHub
function verifySignature(payload, signature) {
  if (!WEBHOOK_SECRET) {
    log('ERROR: WEBHOOK_SECRET tidak diset — semua request ditolak.');
    return false;
  }
  if (!signature) {
    log('ERROR: Tidak ada signature di request.');
    return false;
  }
  const hmac = crypto.createHmac('sha256', WEBHOOK_SECRET);
  const digest = 'sha256=' + hmac.update(payload).digest('hex');
  const sigBuf = Buffer.from(signature);
  const digBuf = Buffer.from(digest);
  if (sigBuf.length !== digBuf.length) return false;
  return crypto.timingSafeEqual(sigBuf, digBuf);
}

// Jalankan deploy script
function runDeploy() {
  log('Menjalankan deploy script...');

  execFile('/bin/bash', [DEPLOY_SCRIPT], {
    cwd: '/root/cakrapamungkas-org',
    timeout: 300000, // 5 menit timeout
    env: { ...process.env, PATH: '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' }
  }, (error, stdout, stderr) => {
    if (error) {
      log(`DEPLOY ERROR: ${error.message}`);
      if (stderr) log(`STDERR: ${stderr}`);
      return;
    }
    log(`DEPLOY OUTPUT:\n${stdout}`);
    if (stderr) log(`STDERR: ${stderr}`);
    log('Deploy selesai!');
  });
}

// HTTP Server
const server = http.createServer((req, res) => {
  // Health check
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
    return;
  }

  // Webhook endpoint
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
      // Limit body size (10MB)
      if (body.length > 10 * 1024 * 1024) {
        res.writeHead(413);
        res.end('Payload too large');
        req.destroy();
      }
    });

    req.on('end', () => {
      // Verifikasi signature
      const signature = req.headers['x-hub-signature-256'];
      if (!verifySignature(body, signature)) {
        log('REJECTED: Signature tidak valid.');
        res.writeHead(401);
        res.end('Unauthorized');
        return;
      }

      // Parse payload
      let payload;
      try {
        payload = JSON.parse(body);
      } catch (e) {
        log('ERROR: Gagal parse JSON payload.');
        res.writeHead(400);
        res.end('Invalid JSON');
        return;
      }

      // Cek event type
      const event = req.headers['x-github-event'];
      log(`Webhook diterima: event=${event}, ref=${payload.ref || 'N/A'}`);

      // Hanya proses push ke master
      if (event === 'push' && payload.ref === ALLOWED_BRANCH) {
        const pusher = payload.pusher ? payload.pusher.name : 'unknown';
        const commitMsg = payload.head_commit ? payload.head_commit.message : 'N/A';
        log(`PUSH ke master oleh ${pusher}: "${commitMsg}"`);
        log('Memulai auto-deploy...');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'deploying', message: 'Deploy dimulai!' }));

        // Jalankan deploy di background
        runDeploy();
        return;
      }

      // Event lain — abaikan
      log(`SKIP: Event "${event}" dengan ref "${payload.ref || 'N/A'}" diabaikan.`);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ignored', message: 'Event diabaikan' }));
    });

    return;
  }

  // 404 untuk route lain
  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  log(`Webhook server berjalan di port ${PORT}`);
  log(`Endpoint: POST /webhook`);
  log(`Health check: GET /health`);
  log(`Branch target: ${ALLOWED_BRANCH}`);
  log(`Secret configured: ${WEBHOOK_SECRET ? 'Ya' : 'Tidak (WARNING!)'}`);
});
