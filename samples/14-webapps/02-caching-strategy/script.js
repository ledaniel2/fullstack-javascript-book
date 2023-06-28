const cacheName = 'pwa-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assetsToCache))
  );
});
