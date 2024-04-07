
// Появление меню
let nav = document.querySelector('.icon-menu');
let headerMenu = document.querySelector('.header__menu');

nav.addEventListener('click', function (e) {
  nav.classList.toggle('menu-open');
  headerMenu.classList.toggle('_active');

  let bodyElement = document.body;
  bodyElement.classList.toggle('_hidden')
});

