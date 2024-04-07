

window.addEventListener('DOMContentLoaded', function (e) {
  const menu = document.querySelector('.menu__list');
  const menuX = menu.offsetLeft;

  const blockContacts = document.querySelector('.contacts__content');
// const blockContactsX = blockContacts.offsetLeft;
  blockContacts.offsetLeft = menuX;
})