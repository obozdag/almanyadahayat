var cacheName = 'marburg-v1';
var staticContentToCache = [
	'/',
	'/js/jquery-3.3.1.min.js',
	'/js/bootstrap.min.js',
	'/css/bootstrap.min.css',
	'/css/fontello.css',
	'/css/fonts/fontello.ttf',
	'/app.js',
	'/css/styles.css',
	'/favicon.ico',
	'/media/icons/icon-72x72.png',
	'/media/icons/icon-96x96.png',
	'/media/icons/icon-128x128.png',
	'/media/icons/icon-144x144.png',
	'/media/icons/icon-152x152.png',
	'/media/icons/icon-192x192.png',
	'/media/icons/icon-384x384.png',
	'/media/icons/icon-512x512.png',
	'/index.html',
	'/egitim.html',
	'/gezi_rehberi.html',
	'/gida_alisveris.html',
	'/iltica_sureci.html',
	'/index.html',
	'/is_yerleri.html',
	'/maneviyat.html',
	'/neustadt_kamp.html',
	'/resmi_islemler.html',
	'/ulasim.html',
	'/uygulamalar.html',
];

// Installing Service Worker
self.addEventListener('install', evt => {
	console.log('[Service Worker] Installed');
	evt.waitUntil(
		caches.open(cacheName).then(cache => {
			staticContentToCache.forEach(function(file){cache.add(file).catch(err=>console.err(err))});
		})
	);
});

// Fetching content using Service Worker
self.addEventListener('fetch', evt => {
	evt.respondWith(
		caches.match(evt.request).then(
			cacheResponse => {
				return cacheResponse || fetch(evt.request);
		}));
});
