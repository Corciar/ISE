// sw.js - Service Worker File

const CACHE_NAME = 'my-site-cache-v1';
const ASSETS_TO_CACHE = [
    '/image Search Engine/',
    '/image Search Engine/index.html',
    '/image Search Engine/style.css',  
    '/image Search Engine/script.js',
    '/image Search Engine/script-to-add-in-index.js',
    '/image Search Engine/1743596616519.jpeg',
    '/image Search Engine/bg.jpg',
    '/image Search Engine/camera.svg',
    '/image Search Engine/download.svg',
    '/image Search Engine/img-1.jpg',
    '/image Search Engine/img-10.jpg',
    '/image Search Engine/img-2.png',
    '/image Search Engine/img-3.jpg',
    '/image Search Engine/img-4.jpg',
    '/image Search Engine/img-5.jpg',
    '/image Search Engine/img-6.jpg',
    '/image Search Engine/img-7.jpg',
    '/image Search Engine/img-8.jpg',
    '/image Search Engine/img-9.jpg',
    '/image Search Engine/search.svg'
  ];

// Install event - caches important files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Fetch event - serves cached content when available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Not in cache - fetch from network
        return fetch(event.request);
      })
  );
});