module.exports = {
  apps: [{
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
  }]
};
