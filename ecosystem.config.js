module.exports = {
  apps: [
    {
      name: 'cakrapamungkas-org',
      cwd: '/root/cakrapamungkas-org',
      script: 'npm',
      args: 'start',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
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
        WEBHOOK_SECRET: 'GANTI_DENGAN_SECRET_KAMU'
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
