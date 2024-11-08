const cacheName = 'app-cache-v1';
const assetsToCache = [
  
  '/hangman/index.html',
  '/hangman/style.css',
  '/hangman/scripts/script.js',
  '/hangman/scripts/word-list.js',
  '/hangman/images/hangman-0.svg',
  '/hangman/images/hangman-1.svg',
  '/hangman/images/hangman-2.svg',
  '/hangman/images/hangman-3.svg',
  '/hangman/images/hangman-4.svg',
  '/hangman/images/hangman-5.svg',
  '/hangman/images/hangman-6.svg',
  '/hangman/images/lost.gif',
  '/hangman/images/victory.gif',
  '/hangman/icon/android-chrome-192x192.png',
  '/hangman/icon/android-chrome-512x512.png'
  

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
