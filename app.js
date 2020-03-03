if('serviceWorker' in navigator)
{
	navigator.serviceWorker.register('/sw.js')
		.then((reg) => {
			console.log('serviceWorker registered', reg);
		})
		.catch((err) => {
			console.log('serviceWorker not registered', err);
		});
}

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'left'});
  // add recipe form
  const links = document.querySelectorAll('.side-links');
  M.Sidenav.init(links, {edge: 'right'});
});
