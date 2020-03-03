// Files to cache
var cacheName = 'marburg-v1';
var appShellFiles = [
'/',
'/index.html',
'/js/materialize.min.js',
'/css/styles.css',
'/favicon.ico',
'/img/icons/icon-72x72.png',
'/img/icons/icon-96x96.png',
'/img/icons/icon-128x128.png',
'/img/icons/icon-144x144.png',
'/img/icons/icon-152x152.png',
'/img/icons/icon-192x192.png',
'/img/icons/icon-384x384.png',
'/img/icons/icon-512x512.png'
];

var contentToCache = appShellFiles;

// Installing Service Worker
self.addEventListener('install', function(e) {
	console.log('[Service Worker] Installed');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[Service Worker] Caching all: app shell and content');
			return cache.addAll(contentToCache);
		})
		);
});

// Fetching content using Service Worker
self.addEventListener
(
	'fetch', function(e) 
	{
		console.log(e.request);
		e.respondWith
		(
			caches.match(e.request).then
			(
				function(r) 
				{
					console.log('[Service Worker] Fetching resource: ' + e.request.url);
					return r || fetch(e.request).then
					(
						function(response) 
						{
							return caches.open(cacheName).then
							(
								function(cache) 
								{
									console.log('[Service Worker] Caching new resource: ' + e.request.url);
									cache.put(e.request, response.clone());
									return response;
								}
							);
						}
					);
				}
			)
		);
	}
);
