module.exports = {
  apps: [
    {
      name: 'aus-vape-compliance-quiz',
      script: 'server.js',
      env: { PORT: 3000 },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
    },
  ],
};
