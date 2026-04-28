// Template — copy ke ecosystem.config.js dan isi WEBHOOK_SECRET sendiri.
// File aktif (ecosystem.config.js) di-gitignore agar secret tidak masuk repo.
//
// Setup:
//   cp ecosystem.config.example.js ecosystem.config.js
//   # edit ecosystem.config.js, ganti WEBHOOK_SECRET
//   pm2 start ecosystem.config.js

module.exports = {
  apps: [
    {
      name: 'cakrapamungkas-org',
      cwd: '/root/cakrapamungkas-org',
      script: 'node',
      args: '.next/standalone/server.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
        HOSTNAME: '127.0.0.1'
      },
      error_file: '/root/cakrapamungkas-org/logs/error.log',
      out_file: '/root/cakrapamungkas-org/logs/out.log',
      log_file: '/root/cakrapamungkas-org/logs/combined.log',
      time: true
    },
    {
      name: 'webhook-server',
      cwd: '/root/cakrapamungkas-org',
      script: 'webhook-server.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        WEBHOOK_SECRET: 'REPLACE_WITH_STRONG_SECRET_FROM_openssl_rand_hex_32'
      },
      error_file: '/root/cakrapamungkas-org/logs/webhook-error.log',
      out_file: '/root/cakrapamungkas-org/logs/webhook-out.log',
      log_file: '/root/cakrapamungkas-org/logs/webhook-combined.log',
      time: true,
      max_restarts: 10,
      restart_delay: 5000
    }
  ]
};
