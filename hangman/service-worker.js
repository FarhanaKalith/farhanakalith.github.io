const cacheName = 'app-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/scripts/script.js',
  '/scripts/word-list.js',
  '/images/hangman-0.svg',
  '/images/hangman-1.svg',
  '/images/hangman-2.svg',
  '/images/hangman-3.svg',
  '/images/hangman-4.svg',
  '/images/hangman-5.svg',
  '/images/hangman-6.svg',
  '/images/lost.gif',
  '/images/victory.gif',
  '/icon/android-chrome-192x192.png',
  '/icon/android-chrome-512x512.png',

];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
