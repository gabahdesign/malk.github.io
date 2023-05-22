function toggleMenu() {
	var menu = document.querySelector('.menu-acordeon');
	menu.classList.toggle('active');
	
	var icon = document.querySelector('.icon');
	icon.classList.toggle('hide-icon');
	
	var nav = document.querySelector('nav');
	nav.classList.toggle('show-menu');
}
