self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
  e.waitUntil(
    caches.open('erikai-cache').then(cache => {
      return cache.addAll([
        'APP_Dowloand/Erik1.jpg',
        'APP_Dowloand/Erik2.jpg',
        'APP_Dowloand/Erik3.jpg',
        'APP_Dowloand/Erik4.jpg',
        'APP_Dowloand/Erik5.jpg',
        'APP_Dowloand/Erik100.jpg',
        'APP_Dowloand/Erik101.jpg',
        'APP_Dowloand/Erik102.jpg',
        'APP_Dowloand/Erik103.jpg',
        'APP_Dowloand/Erik104.jpg',
        'APP_Dowloand/Erik105.jpg',
        'APP_Dowloand/Erik106.jpg',
        'APP_Dowloand/Erik107.jpg',
        'APP_Dowloand/Erik108.jpg',
        'APP_Dowloand/Erik109.jpg',
        'APP_Dowloand/Erik1web.jpg',
        'APP_Dowloand/Erikai25.apk',
        'APP_Dowloand/ErikAI_v1.apk',
        'APP_Dowloand/Erikchat1.jpg',
        'APP_Dowloand/Erikchat2.jpg',
        'APP_Dowloand/Erikchat3.jpg',
        'APP_Dowloand/Turnaj_futbal.docx',
        'APP_Dowloand/VBEM.docx',
        'APP_Dowloand/erikai2025.jpg',
        'APP_Dowloand/erikai_icon_192.png',
        'APP_Dowloand/erikai_icon_512.png',
        'APP_Dowloand/qr_erikai.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
