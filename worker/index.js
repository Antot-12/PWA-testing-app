import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  console.log('Custom SW installing…');
});

self.addEventListener('activate', () => {
  console.log('Custom SW active!');
});

self.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    if (event.request.mode === 'navigate') {
      event.respondWith(caches.match('/offline.html'));
    }
  }
});
