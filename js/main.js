
// Появление меню
let nav = document.querySelector('.icon-menu');
let headerMenu = document.querySelector('.header__menu');


nav.addEventListener('click', function (e) {
  let name = document.querySelector('.header__button');
  nav.classList.toggle('menu-open');
  name.classList.toggle('_active');
  headerMenu.classList.toggle('_active');

  let bodyElement = document.body;
  bodyElement.classList.toggle('_hidden')
});

