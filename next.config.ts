const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  swSrc: 'worker/index.js',  
});

module.exports = withPWA({
  reactStrictMode: true,
  turbopack: {
    enabled: false,
  },
});
