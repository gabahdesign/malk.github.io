// Obtener todos los elementos con clase "has-submenu"
  var submenuItems = document.querySelectorAll('.has-submenu > .submenu-toggle');

  // Agregar eventos de clic a los elementos del submenú
  submenuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault();

      // Obtener el menú padre
      var parentMenu = item.closest('.has-submenu');

      // Obtener todos los submenús
      var submenus = parentMenu.querySelectorAll('.sub-menu');

      // Ocultar todos los submenús
      submenus.forEach(function (submenu) {
        submenu.style.display = 'none';
      });

      // Mostrar el submenú correspondiente al elemento seleccionado
      var submenuToShow = parentMenu.querySelector('.sub-menu');
      submenuToShow.style.display = 'block';

      // Remover la clase "active-submenu" de todos los elementos
      submenuItems.forEach(function (item) {
        item.parentNode.classList.remove('active-submenu');
      });

      // Agregar la clase "active-submenu" al elemento seleccionado
      item.parentNode.classList.add('active-submenu');
    });
  });