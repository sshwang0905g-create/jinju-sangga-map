self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (e) => {
  // 네트워크 우선 응답
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

