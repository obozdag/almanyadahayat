if('serviceWorker' in navigator)
{
	navigator.serviceWorker.register('/sw.js').then(reg => {
		console.log('serviceWorker registered. Scope: ', reg.scope);
	}).catch(err => {
		console.log('serviceWorker not registered', err);
	});
}
