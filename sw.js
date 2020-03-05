var cacheName = 'marburg-v1';
var staticContentToCache = [
	'/',
	'/js/jquery-3.3.1.min.js',
	'/js/bootstrap.min.js',
	'/css/bootstrap.min.css',
	'/css/fontawesome.all.css',
	'/css/webfonts/fa-solid-900.ttf',
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
];

var dynamicContentToCache = [
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
			cache.addAll(staticContentToCache)
				.then(function(result) {
					console.log('[Service Worker] Added static content to cache');

					cache.addAll(dynamicContentToCache)
						.then(result => console.log('[Service Worker] Added dynamic content to cache'))
						.catch(err => console.log(err));
				})
				.catch(err => console.log(err));
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
